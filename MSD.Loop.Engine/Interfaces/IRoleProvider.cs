using MSD.Loop.Engine.Models;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IRoleProvider
    {
        string Initialize();
        void AddRolesToCompany(Company company, IEnumerable<AccessLevel> roles);
        void AddRolesToUsers(IEnumerable<CompanyUser> users, IEnumerable<CompanyAccessRole> roles);
        AccessLevel AddRole(string name);

        Permission AddPermission(string name, string description);
        void DeleteRole(string name);
        void DeleteRole(AccessLevel role);
        IEnumerable<CompanyAccessRole> GetAllRoles();

        IEnumerable<CompanyAccessRole> GetAllRolesByCompany(Company company);
        IEnumerable<CompanyAccessRole> GetRolesForUser(CompanyUser user);
        AccessLevel AddAccessLevelPermission(AccessLevel level, List<Permission> permissions);
    }
}
