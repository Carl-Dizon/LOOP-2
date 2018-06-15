using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyProjectRepository : BaseRepository, IProjectRepository
    {
        public CompanyProjectRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
