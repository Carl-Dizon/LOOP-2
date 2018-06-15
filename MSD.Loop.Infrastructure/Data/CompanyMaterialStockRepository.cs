using MSD.Loop.Infrastructure.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyMaterialStockRepository : BaseRepository, ICompanyMaterialStockRepository
    {
        public CompanyMaterialStockRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
