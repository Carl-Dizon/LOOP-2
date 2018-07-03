using MSD.Loop.Engine.Models;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface ICompanyAccessRoleRepository
    {
        IEnumerable<CompanyAccessRole> AllByCompany(int id);
        CompanyAccessRole Find(int id);
        CompanyAccessRole Create(CompanyAccessRole entity);
        void Update(CompanyAccessRole entity);
        void Delete(CompanyAccessRole entity);
    }
}
