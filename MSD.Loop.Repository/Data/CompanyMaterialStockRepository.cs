using MSD.Loop.Engine.Interfaces;
using System.Data;

namespace MSD.Loop.Repository.Data
{
    public class CompanyMaterialStockRepository : BaseRepository, ICompanyMaterialStockRepository
    {
        public CompanyMaterialStockRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
