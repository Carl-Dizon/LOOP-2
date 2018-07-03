using MSD.Loop.Business.Interfaces;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;

namespace MSD.Loop.Business.Servicess
{
    public class CompanyService : ICompanyService
    {
        private readonly IUnitOfWork _uow;

        public CompanyService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public Company Get(int id)
        {
            var company = _uow.CompanyRepository.Find(id);
            if(company == null)
            {
                throw new NullReferenceException("company is not found");
            }

            return company;
        }

        public IEnumerable<Company> GetAll()
        {
            throw new NotImplementedException();
        }

        
    }
}
