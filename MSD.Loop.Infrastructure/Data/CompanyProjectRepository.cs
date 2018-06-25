using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyProjectRepository : BaseRepository, ICompanyProjectRepository
    {
        public CompanyProjectRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
