using MSD.Loop.Common.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Common.Interfaces
{
    public interface IAppModule
    {
        void Initialize(ApplicationEvents events);
    }
}
