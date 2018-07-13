using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace MSD.Loop.Repository.Data
{
    public class ProjectTaskWorkRepository : BaseRepository, IProjectTaskWorkRepository
    {
        public ProjectTaskWorkRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
