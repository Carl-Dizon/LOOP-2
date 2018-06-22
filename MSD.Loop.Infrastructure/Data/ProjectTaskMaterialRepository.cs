using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class ProjectTaskMaterialRepository : BaseRepository, IProjectTaskMaterialRepository
    {
        public ProjectTaskMaterialRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
