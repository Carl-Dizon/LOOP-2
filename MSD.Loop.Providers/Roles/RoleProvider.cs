using System;
using MSD.Loop.Common.Interfaces;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using MSD.Loop.Engine.Models;
using MSD.Loop.Engine.Interfaces;

namespace MSD.Loop.Providers.Roles
{
    public class RoleProvider : IRoleProvider
    {
        private readonly IUnitOfWork _uow;
        public RoleProvider(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public void Initialize(IDbConnection connection)
        {
            try
            {
               
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
