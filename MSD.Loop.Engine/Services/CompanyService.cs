using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public class CompanyService : ICompanyService
    {
        private readonly IUnitOfWork _uow;
        private readonly ICompanyFactory _companyFactory;

        public CompanyService(IUnitOfWork uow, ICompanyFactory companyFactory)
        {
            _uow = uow;
            _companyFactory = companyFactory;
        }

        public Company Get(int id)
        {
            return _uow.CompanyRepository.FindById(id);
        }

        public IEnumerable<Company> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
