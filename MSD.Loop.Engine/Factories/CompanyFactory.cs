using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.Engine.Factories
{
    public class CompanyFactory : ICompanyFactory
    {
        public CompanyDTO Create(Company company)
        {
            return new CompanyDTO();
        }
    }
}
