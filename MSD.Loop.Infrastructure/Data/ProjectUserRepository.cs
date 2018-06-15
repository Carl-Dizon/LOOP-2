using MSD.Loop.Infrastructure.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class ProjectUserRepository : BaseRepository, ICompanyProjectUserRepository
    {
        public ProjectUserRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
