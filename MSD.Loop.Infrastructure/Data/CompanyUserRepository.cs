using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyUserRepository : BaseRepository, ICompanyUserRepository
    {
        public CompanyUserRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
