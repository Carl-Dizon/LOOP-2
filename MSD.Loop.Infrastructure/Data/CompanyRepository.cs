using System.Data;
using MSD.Loop.Infrastructure.Interfaces;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyRepository : BaseRepository, ICompanyRepository
    {
        public CompanyRepository(IDbTransaction transaction) : base(transaction)
        {

        }
    }
}
