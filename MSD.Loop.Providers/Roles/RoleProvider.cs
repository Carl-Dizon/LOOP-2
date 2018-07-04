using MSD.Loop.Common.Interfaces;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;

namespace MSD.Loop.Providers.Roles
{
    public class RoleProvider : IRoleProvider
    {
        private readonly IUnitOfWork _uow;
        public RoleProvider(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public void Initialize()
        {
            //TODO: check from appsettings if the predefined tables for roles have been populated
            //OR manually check it here using conventional sql queries to check 

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

            var superAdminLevel = CreateRole("superadministrator");
            var administrator = CreateRole("administrator");
            var manager = CreateRole("manager");
            var leader = CreateRole("lead");
            var worker = CreateRole("worker");

            //var superAdminLevel = CreateAccessLevels("superadministrator");
            //var administrator = CreateAccessLevels("administrator");
            //var manager = CreateAccessLevels("manager");
            //var leader = CreateAccessLevels("lead");
            //var worker = CreateAccessLevels("worker");

            ////setup default company's access levels or roles
            //var defaultCompany = CreateDefaultUserAndCompany();
            //CreateCompanyAccessRoles(defaultCompany, new List<AccessLevel>
            //{
            //    superAdminLevel, administrator, manager, leader, worker
            //});

            //CreateAccessLevelPermission(superAdminLevel, new List<Permission> {
            //    permissionAll
            //});

            //CreateAccessLevelPermission(administrator, new List<Permission>
            //{
            //    permissionUserCreate, permissionUserRead, permissionUserUpdate, permissionUserDelete,
            //    permissionRoleCreate, permissionRoleRead, permissionRoleUpdate, permissionRoleDelete,
            //    permissionAreaCreate, permissionAreaRead, permissionAreaUpdate, permissionAreaDelete,
            //    permissionPermissionCreate, permissionPermissionRead, permissionPermissionUpdate, permissionPermissionDelete,
            //    permissionMaterialCreate, permissionMaterialRead, permissionMaterialUpdate, permissionMaterialDelete,

            //    permissionCompanyCreate, permissionCompanyRead, permissionCompanyUpdate, permissionCompanyDelete,
            //    permissionProjectCreate, permissionProjectRead, permissionProjectUpdate, permissionProjectDelete,
            //    permissionTaskCreate, permissionTaskRead, permissionTaskUpdate, permissionTaskDelete,
            //    permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete
            //});

            //CreateAccessLevelPermission(manager, new List<Permission>
            //{
            //    permissionUserRead,
            //    permissionRoleRead,
            //    permissionAreaRead,
            //    permissionMaterialCreate, permissionMaterialRead, permissionMaterialUpdate, permissionMaterialDelete,
            //    permissionCompanyCreate, permissionCompanyRead, permissionCompanyUpdate, permissionCompanyDelete,
            //    permissionProjectCreate, permissionProjectRead, permissionProjectUpdate, permissionProjectDelete,
            //    permissionTaskCreate, permissionTaskRead, permissionTaskUpdate, permissionTaskDelete,
            //    permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete

            //});

            //CreateAccessLevelPermission(leader, new List<Permission>
            //{
            //    permissionCompanyRead,
            //    permissionProjectCreate, permissionProjectRead, permissionProjectUpdate, permissionProjectDelete,
            //    permissionTaskCreate, permissionTaskRead, permissionTaskUpdate, permissionTaskDelete,
            //    permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete
            //});

            //CreateAccessLevelPermission(worker, new List<Permission>
            //{
            //    permissionCompanyRead,
            //    permissionProjectRead,
            //    permissionTaskRead,
            //    permissionLogCreate, permissionLogRead, permissionLogUpdate, permissionLogDelete
            //});
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

            foreach (var permission in permissions)
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

        //private void CreateCompanyAccessRoles(Company defaultCompany, List<AccessLevel> levels)
        //{
        //    foreach (var level in levels)
        //    {
        //        var companyAccessRole = new CompanyAccessRole
        //        {
        //            AccessLevel = level,
        //            Company = defaultCompany,
        //            IsArchived = false,
        //            Name = string.Concat(defaultCompany.Name, "-", level.Name),
        //            Description = string.Concat(defaultCompany.Name, "-", level.Name)

        //        };

        //        _uow.CompanyRoleRepository.Create(companyAccessRole);
        //        _uow.Commit();
        //    }
        //}

        public void AddRolesToCompany(Company company, IEnumerable<AccessLevel> roles)
        {
            foreach (var role in roles)
            {
                var companyAccessRole = new CompanyAccessRole
                {
                    AccessLevel = role,
                    Company = company,
                    IsArchived = false,
                    Name = string.Concat(company.Name, "-", role.Name),
                    Description = string.Concat(company.Name, "-", role.Name)

                };

                _uow.CompanyRoleRepository.Create(companyAccessRole);
                _uow.Commit();
            }
        }

        public void AddRolesToUsers(IEnumerable<CompanyUser> users, IEnumerable<CompanyAccessRole> roles)
        {
            throw new NotImplementedException();
        }

        public AccessLevel CreateRole(string name)
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

        public void DeleteRole()
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

        public string[] GetRolesForUser(CompanyUser user)
        {
            throw new NotImplementedException();
        }

        public Permission CreatePermission(string name)
        {
            throw new NotImplementedException();
        }

        public void DeleteRole(string name)
        {
            throw new NotImplementedException();
        }

        public void DeleteRole(AccessLevel role)
        {
            throw new NotImplementedException();
        }

        IEnumerable<CompanyAccessRole> IRoleProvider.GetRolesForUser(CompanyUser user)
        {
            throw new NotImplementedException();
        }
    }
}
