using MSD.Loop.DTO.Interfaces;
using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.DTO.Factories
{
    public class CompanyFactory : ICompanyFactory
    {
        public CompanyDTO Create(Company company)
        {
            return new CompanyDTO();
        }
    }
}
