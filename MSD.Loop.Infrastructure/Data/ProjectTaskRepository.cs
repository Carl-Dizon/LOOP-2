using MSD.Loop.Infrastructure.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class ProjectTaskRepository : BaseRepository, IProjectTaskRepository
    {
        public ProjectTaskRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
