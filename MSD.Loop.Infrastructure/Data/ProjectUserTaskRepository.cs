using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class ProjectUserTaskRepository : BaseRepository, ICompanyProjectUserTaskRepository
    {
        public ProjectUserTaskRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
