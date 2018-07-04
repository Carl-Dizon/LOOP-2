using MSD.Loop.Engine.Models;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IRoleProvider
    {
        void Initialize();
        void AddRolesToCompany(Company company, IEnumerable<AccessLevel> roles);
        void AddRolesToUsers(IEnumerable<CompanyUser> users, IEnumerable<CompanyAccessRole> roles);
        AccessLevel CreateRole(string name);
        Permission CreatePermission(string name);
        void DeleteRole(string name);
        void DeleteRole(AccessLevel role);
        IEnumerable<CompanyAccessRole> GetAllRoles();
        IEnumerable<CompanyAccessRole> GetAllRolesByCompany(Company company);
        IEnumerable<CompanyAccessRole> GetRolesForUser(CompanyUser user);
        
    }
}
