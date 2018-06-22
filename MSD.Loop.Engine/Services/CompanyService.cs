using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.Engine.Services
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
            return _uow.CompanyRepository.FindById(id);
        }

        public IEnumerable<Company> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
