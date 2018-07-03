using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IAccessLevelPermissionRepository
    {
        IEnumerable<AccessLevelPermission> All();
        AccessLevelPermission Find(int id);
        AccessLevelPermission Create(AccessLevelPermission entity);
        void Update(AccessLevelPermission entity);
        void Delete(AccessLevelPermission entity);
    }
}
