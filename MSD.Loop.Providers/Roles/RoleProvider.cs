using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MSD.Loop.Providers.Roles
{
    public class RoleProvider : IRoleProvider
    {
        private readonly IUnitOfWork _uow;
        public RoleProvider(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public void AddRolesToCompany(Company company, IEnumerable<AccessLevel> roles)
        {
            foreach (var role in roles)
            {
                //check if exist already
                var existingAccessRole = _uow.CompanyAccessRoleRepository
                    .AllByCompany(company.Id)
                    .FirstOrDefault(c => c.AccessLevelId == role.Id);

                if (existingAccessRole == null)
                {
                    var companyAccessRole = new CompanyAccessRole
                    {
                        AccessLevelId = role.Id,
                        CompanyId = company.Id,
                        IsArchived = false,
                        Name = string.Concat(company.Name, "-", role.Name),
                        Description = string.Concat(company.Name, "-", role.Name)

                    };

                    _uow.CompanyAccessRoleRepository.Create(companyAccessRole);
                    _uow.Commit();
                }
            }
        }

        public void AddRolesToUsers(IEnumerable<CompanyUser> users, IEnumerable<CompanyAccessRole> roles)
        {
            throw new NotImplementedException();
        }

        public Permission AddPermission(string name, string description = "")
        {
            Permission permission;
            try
            {
                permission = _uow.PermissionRepo.FindByName(name);
            }
            catch (Exception)
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

        public AccessLevel AddRole(string name)
        {
            AccessLevel accessLevel;
            try
            {
                accessLevel = _uow.AccessLevelRepo.FindByName(name);
            }
            catch (Exception)
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

        public void DeleteRole(string name)
        {
            throw new NotImplementedException();
        }

        public void DeleteRole(AccessLevel role)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<CompanyAccessRole> GetAllRoles()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<CompanyAccessRole> GetAllRolesByCompany(Company company)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<CompanyAccessRole> GetRolesForUser(CompanyUser user)
        {
            throw new NotImplementedException();
        }

        public string Initialize()
        {
            //TODO: how to be able to do this
            //return _uow.UserRepository.All().FirstOrDefault().Email;

            ////TODO: check from appsettings if the predefined tables for roles have been populated
            ////OR manually check it here using conventional sql queries to check 

            var permissionAll = AddPermission("All");
            var permissionUserCreate = AddPermission("User-create");
            var permissionUserRead = AddPermission("User-read");
            var permissionUserUpdate = AddPermission("User-update");
            var permissionUserDelete = AddPermission("User-delete");

            var permissionRoleCreate = AddPermission("Role-create");
            var permissionRoleRead = AddPermission("Role-read");
            var permissionRoleUpdate = AddPermission("Role-update");
            var permissionRoleDelete = AddPermission("Role-delete");

            var permissionAreaCreate = AddPermission("Area-create");
            var permissionAreaRead = AddPermission("Area-read");
            var permissionAreaUpdate = AddPermission("Area-update");
            var permissionAreaDelete = AddPermission("Area-delete");

            var permissionPermissionCreate = AddPermission("Permission-create");
            var permissionPermissionRead = AddPermission("Permission-read");
            var permissionPermissionUpdate = AddPermission("Permission-update");
            var permissionPermissionDelete = AddPermission("Permission-delete");

            var permissionCompanyCreate = AddPermission("Company-create");
            var permissionCompanyRead = AddPermission("Company-read");
            var permissionCompanyUpdate = AddPermission("Company-update");
            var permissionCompanyDelete = AddPermission("Company-delete");

            var permissionProjectCreate = AddPermission("Project-create");
            var permissionProjectRead = AddPermission("Project-read");
            var permissionProjectUpdate = AddPermission("Project-update");
            var permissionProjectDelete = AddPermission("Project-delete");

            var permissionTaskCreate = AddPermission("Task-create");
            var permissionTaskRead = AddPermission("Task-read");
            var permissionTaskUpdate = AddPermission("Task-update");
            var permissionTaskDelete = AddPermission("Task-delete");

            var permissionLogCreate = AddPermission("Log-create");
            var permissionLogRead = AddPermission("Log-read");
            var permissionLogUpdate = AddPermission("Log-update");
            var permissionLogDelete = AddPermission("Log-delete");

            var permissionMaterialCreate = AddPermission("Material-create");
            var permissionMaterialRead = AddPermission("Material-read");
            var permissionMaterialUpdate = AddPermission("Material-update");
            var permissionMaterialDelete = AddPermission("Material-delete");

            var superAdminLevel = AddRole("superadmin");
            var administrator = AddRole("admin");
            var manager = AddRole("manager");
            var leader = AddRole("lead");
            var worker = AddRole("worker");

            AddAccessLevelPermission(superAdminLevel, new List<Permission> {
                permissionAll
            });

            AddAccessLevelPermission(administrator, new List<Permission>
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

            AddAccessLevelPermission(manager, new List<Permission>
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

            AddAccessLevelPermission(leader, new List<Permission>
            {
                permissionCompanyRead,
                permissionProjectCreate, permissionProjectRead, permissionProjectUpdate, permissionProjectDelete,
                permissionTaskCreate, permissionTaskRead, permissionTaskUpdate, permissionTaskDelete,
                permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete
            });

            AddAccessLevelPermission(worker, new List<Permission>
            {
                permissionCompanyRead,
                permissionProjectRead,
                permissionTaskRead,
                permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete
            });

            //setup default company's access levels or roles
            var defaultCompany = _uow.CompanyRepository.All().SingleOrDefault(c => c.IsDefault);
            AddRolesToCompany(defaultCompany, new List<AccessLevel>
            {
                superAdminLevel, administrator, manager, leader, worker
            });

            return permissionAll.Name;
        }

        public AccessLevel AddAccessLevelPermission(AccessLevel level, List<Permission> permissions)
        {
            if (level == null || permissions == null || permissions.Count == 0)
            {
                throw new Exception("Access level permissions not found");
            }

            foreach (var permission in permissions)
            {
                var existingAccessLevelPersmission = _uow.AccessLevelPermissionRepo
                    .All()
                    .FirstOrDefault(c => c.AccessLevelId == level.Id && c.PermissionId == permission.Id);

                if (existingAccessLevelPersmission == null)
                {
                    var newAccessLvlPermission = new AccessLevelPermission
                    {
                        AccessLevelId = level.Id,
                        PermissionId = permission.Id,
                        AccessLevelKey = string.Concat(level.Name,":",permission.Name)
                    };

                    _uow.AccessLevelPermissionRepo.Create(newAccessLvlPermission);
                    _uow.Commit();
                }
            }

            return level;
        }
    }
}
