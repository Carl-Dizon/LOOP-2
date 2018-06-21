using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyAccessRoleRepository : BaseRepository, ICompanyAccessRoleRepository
    {
        public CompanyAccessRoleRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
