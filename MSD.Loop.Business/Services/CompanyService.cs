using MSD.Loop.Business.Interfaces;
using MSD.Loop.DTO.Interfaces;
using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MSD.Loop.Business.Servicess
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

        public CompanyDTO Get(int id)
        {
            var company = _uow.CompanyRepository.Find(id);
            if(company == null)
            {
                throw new NullReferenceException("Company is not found");
            }

            var companyDTO = _companyFactory.Create(company);
            return companyDTO;
        }

        public IEnumerable<CompanyDTO> Get()
        {
            var companies = _uow.CompanyRepository.All();
            if (companies == null)
            {
                throw new NullReferenceException("Companies not found");
            }

            return companies.Select(c => _companyFactory.Create(c));

        }

        public IEnumerable<CompanyDTO> GetCompaniesAsMember(int userId)
        {
            var companyUsers = _uow.CompanyUserRepository.AllByUserId(userId);
            if (companyUsers == null)
            {
                throw new NullReferenceException("No companies found for user");
            }

            var companies = companyUsers.Select(cu => {
                var company = _uow.CompanyRepository.Find(cu.CompanyId);
                if(company != null)
                {
                    return _companyFactory.Create(company);
                }
                return null;
            });
            return companies;
        }

        public CompanyDTO GetCompanyAsMember(int companyId, int userId)
        {
            var companyDTO = GetCompaniesAsMember(userId).FirstOrDefault(c => c.Id == companyId);
            if(companyDTO == null)
            {
                throw new NullReferenceException("No company for member found");
            }

            return companyDTO;
        }
    }
}
