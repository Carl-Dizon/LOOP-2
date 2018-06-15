using MSD.Loop.Infrastructure.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyRoleRepository : BaseRepository, ICompanyRoleRepository
    {
        public CompanyRoleRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
