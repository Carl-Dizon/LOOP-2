using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace MSD.Loop.Infrastructure.Configurations
{
    public class ApplicationSettingRepository : BaseRepository, IApplicationSettingRepository
    {
        public ApplicationSettingRepository(IDbTransaction transaction) : base(transaction)
        {

        }
    }
}
