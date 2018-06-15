using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class ProjectTaskUserRepository : BaseRepository, ICompanyProjectTaskUserRepository
    {
        public ProjectTaskUserRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
