using MSD.Loop.Engine.Models;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface ICompanyProjectAreaRepository
    {
        IEnumerable<CompanyProjectArea> All();
        CompanyProjectArea Find(int id);
        CompanyProjectArea FindByName(string name);
        CompanyProjectArea Create(CompanyProjectArea entity);
        void Update(CompanyProjectArea entity);
        void Delete(CompanyProjectArea entity);
    }
}
