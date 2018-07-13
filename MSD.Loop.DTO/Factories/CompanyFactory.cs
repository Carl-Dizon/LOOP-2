using MSD.Loop.DTO.Interfaces;
using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.DTO.Factories
{
    public class CompanyFactory : ICompanyFactory
    {

        /*
         
             */

        public CompanyFactory()
        {

        }
        public CompanyDTO Create(Company company)
        {
            return new CompanyDTO
            {
                Id = company.Id,
                Name = company.Name,
                CreatedByUserId = company.CreatedByUser.Id,
                Description = company.Description,
                IsArchived = company.IsArchived,
                LogoUrl = company.LogoUrl,
                WebUrl = company.WebUrl
            };
        }
    }
}
