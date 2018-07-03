using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IAccessLevelRepository
    {
        IEnumerable<AccessLevel> All();
        AccessLevel Find(int id);
        AccessLevel FindByName(string name);
        AccessLevel Create(AccessLevel entity);
        void Update(AccessLevel entity);
        void Delete(AccessLevel entity);
    }
}
