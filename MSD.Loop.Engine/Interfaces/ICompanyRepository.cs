using MSD.Loop.Engine.Models;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface ICompanyRepository
    {
        IEnumerable<Company> All();
        Company Find(int id);
        Company FindByName(string name);
        Company Create(Company entity);
        void Update(Company entity);
        void Delete(Company entity);
    }
}
