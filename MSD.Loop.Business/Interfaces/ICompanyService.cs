using MSD.Loop.DTO.Models;
using System.Collections.Generic;

namespace MSD.Loop.Business.Interfaces
{
    public interface ICompanyService
    {
        IEnumerable<CompanyDTO> GetCompaniesAsMember(int userId);
        IEnumerable<CompanyDTO> Get();
        CompanyDTO Get(int id);
        CompanyDTO GetCompanyAsMember(int companyId, int userId);
    }
}
