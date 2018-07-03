using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IPermissionRepository
    {
        IEnumerable<Permission> All();
        Permission Find(int id);
        Permission FindByName(string name);
        Permission Create(Permission entity);
        void Update(Permission entity);
        void Delete(Permission entity);
    }
}
