using MSD.Loop.Common.Interfaces;
using MSD.Loop.Common.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IConfigurationFactory
    {
        IMailer GetMailer();
        ILogger GetLogger();
        LoopEngineEvent GetEvents();
    }
}
