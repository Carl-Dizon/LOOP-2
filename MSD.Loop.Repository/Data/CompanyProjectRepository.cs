using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Repository.Data
{
    public class CompanyProjectRepository : BaseRepository, ICompanyProjectRepository
    {
        public CompanyProjectRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
