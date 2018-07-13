using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Repository.Data
{
    public class ProjectUserRepository : BaseRepository, ICompanyProjectUserRepository
    {
        public ProjectUserRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
