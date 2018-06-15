using MSD.Loop.Infrastructure.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class ProjectMaterialRepository : BaseRepository, IProjectTaskMaterialRepository
    {
        public ProjectMaterialRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
