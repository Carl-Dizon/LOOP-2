using MSD.Loop.Engine.Models;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface ICompanyUserRepository
    {
        IEnumerable<CompanyUser> All();
        IEnumerable<CompanyUser> AllByUserId(int id);
        CompanyUser Find(int id);
        CompanyUser FindByName(string name);
        CompanyUser Create(CompanyUser entity);
        void Update(CompanyUser entity);
        void Delete(CompanyUser entity);
    }
}
