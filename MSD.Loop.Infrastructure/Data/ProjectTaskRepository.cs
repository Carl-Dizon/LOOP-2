using MSD.Loop.Engine.Interfaces;
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
