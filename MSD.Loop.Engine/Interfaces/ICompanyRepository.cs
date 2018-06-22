using MSD.Loop.Engine.Models;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface ICompanyRepository
    {
        Company Add(Company entity);
        void Delete(Company entity);
        void DeleteById(int id);
        IEnumerable<Company> FindAll();
        Company FindById(int id);
        Company Update(Company entity);
    }
}
