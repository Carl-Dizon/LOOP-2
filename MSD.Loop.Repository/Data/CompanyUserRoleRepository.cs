using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Repository.Data
{
    public class CompanyUserRoleRepository : BaseRepository, ICompanyUserRoleRepository
    {
        public CompanyUserRoleRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
