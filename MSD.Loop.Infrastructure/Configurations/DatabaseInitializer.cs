using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using MSD.Loop.Infrastructure.Interfaces;
using MSD.Loop.Engine.Models;
using MSD.Loop.Engine.Interfaces;

namespace MSD.Loop.Infrastructure.Configurations
{
    public class DatabaseInitializer : IDatabaseInitializer
    {
        private readonly IUnitOfWork _uow;
        private readonly IConnectionFactory _connectionFactory;

        private readonly IDbConnection _connection;
        private readonly IDbTransaction _transaction;

        public DatabaseInitializer(IUnitOfWork unitOfWork, IConnectionFactory connectionFactory)
        {
            _uow = unitOfWork;
            _connectionFactory = connectionFactory;
            var connection = _connectionFactory.GetConnection();
            if (connection == null)
            {
                throw new NullReferenceException("Connection to application database cannot be established. ");
            }

            _connection = connection;

            var transaction = connection.BeginTransaction();
            if (transaction == null)
            {
                throw new NullReferenceException("Transaction object from connection cannot be established.");
            }

            _transaction = transaction;

        }

        public void BootstrapAppDatabases()
        {
            //check tables
            //var query = @"SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA";

            //try fetch appsettings if any exist
            var sqlQuery = @"SELECT * FROM ApplicationSettings";

            var returnedRows = _connection.Execute(sqlQuery, transaction: _transaction);
            if (returnedRows == 0)
            {
                //create or insert the application setting table
                sqlQuery = @"INSERT INTO ApplicationSettings";
            }

            //setup the permissions
            var permissionAll = CreatePermission("All");
            var permissionUserCreate = CreatePermission("User-create");
            var permissionUserRead = CreatePermission("User-read");
            var permissionUserUpdate = CreatePermission("User-update");
            var permissionUserDelete = CreatePermission("User-delete");

            var permissionRoleCreate = CreatePermission("Role-create");
            var permissionRoleRead = CreatePermission("Role-read");
            var permissionRoleUpdate = CreatePermission("Role-update");
            var permissionRoleDelete = CreatePermission("Role-delete");

            var permissionAreaCreate = CreatePermission("Area-create");
            var permissionAreaRead = CreatePermission("Area-read");
            var permissionAreaUpdate = CreatePermission("Area-update");
            var permissionAreaDelete = CreatePermission("Area-delete");

            var permissionPermissionCreate = CreatePermission("Permission-create");
            var permissionPermissionRead = CreatePermission("Permission-read");
            var permissionPermissionUpdate = CreatePermission("Permission-update");
            var permissionPermissionDelete = CreatePermission("Permission-delete");

            var permissionCompanyCreate = CreatePermission("Company-create");
            var permissionCompanyRead = CreatePermission("Company-read");
            var permissionCompanyUpdate = CreatePermission("Company-update");
            var permissionCompanyDelete = CreatePermission("Company-delete");

            var permissionProjectCreate = CreatePermission("Project-create");
            var permissionProjectRead = CreatePermission("Project-read");
            var permissionProjectUpdate = CreatePermission("Project-update");
            var permissionProjectDelete = CreatePermission("Project-delete");

            var permissionTaskCreate = CreatePermission("Task-create");
            var permissionTaskRead = CreatePermission("Task-read");
            var permissionTaskUpdate = CreatePermission("Task-update");
            var permissionTaskDelete = CreatePermission("Task-delete");

            var permissionLogCreate = CreatePermission("Log-create");
            var permissionLogRead = CreatePermission("Log-read");
            var permissionLogUpdate = CreatePermission("Log-update");
            var permissionLogDelete = CreatePermission("Log-delete");

            var permissionMaterialCreate = CreatePermission("Material-create");
            var permissionMaterialRead = CreatePermission("Material-read");
            var permissionMaterialUpdate = CreatePermission("Material-update");
            var permissionMaterialDelete = CreatePermission("Material-delete");

            var superAdminLevel = CreateAccessLevels("superadministrator");
            var administrator = CreateAccessLevels("administrator");
            var manager = CreateAccessLevels("manager");
            var leader = CreateAccessLevels("lead");
            var worker = CreateAccessLevels("worker");

            //setup default company's access levels or roles
            var defaultCompany = CreateDefaultUserAndCompany();
            CreateCompanyAccessRoles(defaultCompany, new List<AccessLevel>
            {
                superAdminLevel, administrator, manager, leader, worker
            });

            CreateAccessLevelPermission(superAdminLevel, new List<Permission> {
                permissionAll
            });

            CreateAccessLevelPermission(administrator, new List<Permission>
            {
                permissionUserCreate, permissionUserRead, permissionUserUpdate, permissionUserDelete,
                permissionRoleCreate, permissionRoleRead, permissionRoleUpdate, permissionRoleDelete,
                permissionAreaCreate, permissionAreaRead, permissionAreaUpdate, permissionAreaDelete,
                permissionPermissionCreate, permissionPermissionRead, permissionPermissionUpdate, permissionPermissionDelete,
                permissionMaterialCreate, permissionMaterialRead, permissionMaterialUpdate, permissionMaterialDelete,

                permissionCompanyCreate, permissionCompanyRead, permissionCompanyUpdate, permissionCompanyDelete,
                permissionProjectCreate, permissionProjectRead, permissionProjectUpdate, permissionProjectDelete,
                permissionTaskCreate, permissionTaskRead, permissionTaskUpdate, permissionTaskDelete,
                permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete
            });

            CreateAccessLevelPermission(manager, new List<Permission>
            {
                permissionUserRead,
                permissionRoleRead,
                permissionAreaRead,
                permissionMaterialCreate, permissionMaterialRead, permissionMaterialUpdate, permissionMaterialDelete,
                permissionCompanyCreate, permissionCompanyRead, permissionCompanyUpdate, permissionCompanyDelete,
                permissionProjectCreate, permissionProjectRead, permissionProjectUpdate, permissionProjectDelete,
                permissionTaskCreate, permissionTaskRead, permissionTaskUpdate, permissionTaskDelete,
                permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete

            });

            CreateAccessLevelPermission(leader, new List<Permission>
            {
                permissionCompanyRead,
                permissionProjectCreate, permissionProjectRead, permissionProjectUpdate, permissionProjectDelete,
                permissionTaskCreate, permissionTaskRead, permissionTaskUpdate, permissionTaskDelete,
                permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete
            });

            CreateAccessLevelPermission(worker, new List<Permission>
            {
                permissionCompanyRead,
                permissionProjectRead,
                permissionTaskRead,
                permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete
            });
            
        }

        private void CreateCompanyAccessRoles(Company defaultCompany, List<AccessLevel> levels)
        {
            foreach(var level in levels)
            {
                var companyAccessRole = new CompanyAccessRole
                {
                    AccessLevel = level,
                    Company = defaultCompany,
                    IsArchived = false,
                    Name = string.Concat(defaultCompany.Name, "-",level.Name),
                    Description = string.Concat(defaultCompany.Name, "-", level.Name)

                };

                _uow.CompanyRoleRepository.Create(companyAccessRole);
                _uow.Commit();
            }

        }

        private AccessLevel CreateAccessLevels(string name, string description = "")
        {
            //check if it already exist, if not found create one
            var accessLevel = _uow.AccessLevelRepo.FindByName(name);
            if (accessLevel == null)
            {
                var newAccessLevel = new AccessLevel
                {
                    Name = name,
                    IsArchived = false
                };

                accessLevel = _uow.AccessLevelRepo.Create(newAccessLevel);
                _uow.Commit();
            }
            
            return accessLevel;
        }

        private Permission CreatePermission(string name, string description = "")
        {
            //check if it already exist, if not found create one
            var permission = _uow.PermissionRepo.FindByName(name);
            if (permission == null)
            {
                var newPermission = new Permission
                {
                    Name = name,
                    Description = description
                };

                permission = _uow.PermissionRepo.Create(newPermission);
                _uow.Commit();
            }
          
            return permission;
        }

        private AccessLevel CreateAccessLevelPermission(AccessLevel level, List<Permission> permissions)
        {
            if (level == null || permissions == null || permissions.Count == 0)
            {
                throw new Exception("Access level permissions not found");
            }

            foreach(var permission in permissions)
            {
                var newAccessLvlPermission = new AccessLevelPermission
                {
                    AccessLevel = level,
                    Permission = permission
                };

                _uow.AccessLevelPermissionRepo.Create(newAccessLvlPermission);
                _uow.Commit();
            }

            return level;

        }

        private Company CreateDefaultUserAndCompany()
        {

            //STEP: create default user
            User defaultUser = null;
            var query = @"SELECT * FROM Users WHERE IsDefault = @IsDefault";
            var firstUser = _connection.QueryFirstOrDefault<User>(query, param: new { IsDefault = true }, transaction: _transaction);
            if (firstUser == null)
            {
                //create default/first user
                firstUser = new User
                {
                    Firstname = "Default",
                    Lastname = "Default",
                    Email = "default@noreply.com",
                    Password = "adminpasswordhashed", //TODO: hash this
                    IsVerified = true,
                    IsDefault = true,
                    CreatedOn = DateTime.UtcNow,
                    LastModifiedOn = DateTime.UtcNow,
                    IsArchived = false
                };

                firstUser = _uow.UserRepository.Create(firstUser);
                firstUser.CreatedBy = firstUser;
                _uow.UserRepository.Update(defaultUser);
                _uow.Commit();
            }

            //get/create default company
            query = @"SELECT * FROM Companies WHERE IsDefault = @IsDefault";
            var defaultCompany = _connection.QueryFirstOrDefault<Company>(query, param: new { IsDefault = true }, transaction: _transaction);
            if (defaultCompany == null)
            {
                defaultCompany = new Company
                {
                    CreatedByUser = firstUser,
                    Name = "Default company",
                    IsDefault = true,
                    Description = "Default company",
                    CreatedOn = DateTime.UtcNow,
                    LastModifiedOn = DateTime.UtcNow,
                    IsArchived = false,
                    LogoUrl = "",
                    WebUrl = ""
                };

                _uow.CompanyRepository.Create(defaultCompany);
                _uow.Commit();
            }

            //create default companyuser from default company and default user
            query = @"INSERT INTO CompanyUsers (UserId, CompanyId, Username, CreatedByUserId) VALUES(@UserId, @CompanyId, @Username, @CreatedByUserId)";
            var affectedRows = _connection.Execute(query, param: new
            {
                UserId = firstUser.Id,
                CompanyId = defaultCompany.Id,
                Username = firstUser.Email,
                CreatedByUserId = firstUser.Id

            }, transaction: _transaction);
            _transaction.Commit();

            return defaultCompany;
        }
    }
}
