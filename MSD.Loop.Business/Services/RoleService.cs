using System.Collections.Generic;
using MSD.Loop.Business.Interfaces;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.Business.Services
{
    /// <summary>
    /// Wrapper type for the role provider instance
    /// Managing data for user and company roles
    /// </summary>
    public class RoleService : BaseService, IRoleService
    {
        private readonly IRoleProvider _roleProvider;
        public RoleService(IRoleProvider roleProvider)
        {
            _roleProvider = roleProvider;
        }

        public void AddRolesToCompany(Company company, IEnumerable<AccessLevel> roles)
        {
            _roleProvider.AddRolesToCompany(company, roles);
        }

        public void AddRolesToUsers(IEnumerable<CompanyUser> users, IEnumerable<CompanyAccessRole> roles)
        {
            _roleProvider.AddRolesToUsers(users, roles);
        }

        public Permission CreatePermission(string name, string description)
        {
            return _roleProvider.AddPermission(name, description);
        }

        public AccessLevel CreateRole(string name)
        {
            return _roleProvider.AddRole(name);
        }

        public void DeleteRole(string name)
        {
            _roleProvider.DeleteRole(name);
        }

        public void DeleteRole(AccessLevel role)
        {
            _roleProvider.DeleteRole(role);
        }

        public IEnumerable<CompanyAccessRole> GetAllRoles()
        {
            return _roleProvider.GetAllRoles();
        }

        public IEnumerable<CompanyAccessRole> GetAllRolesByCompany(Company company)
        {
            return _roleProvider.GetAllRolesByCompany(company);
        }

        public IEnumerable<CompanyAccessRole> GetRolesForUser(CompanyUser user)
        {
            return _roleProvider.GetRolesForUser(user);
        }

        public string InitializeDatabase()
        {
            return _roleProvider.Initialize();
        }
    }
}
