using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.DTO.Interfaces
{
    public interface ICompanyFactory
    {
        CompanyDTO Create(Company company);
    }
}
