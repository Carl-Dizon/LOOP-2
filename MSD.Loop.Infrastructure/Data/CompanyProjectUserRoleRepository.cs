using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyProjectUserRoleRepository : BaseRepository, ICompanyProjectUserRoleRepository
    {
        public CompanyProjectUserRoleRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
