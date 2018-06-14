using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Common.Modules
{
    public delegate void LoopEngineModuleDelegate<T>(T e);

    public class ProjectEventArgs : CancelEventArgs
    {
        public string Description { get; set; }
    }

    public class LoopEngineEvent
    {
        public LoopEngineModuleDelegate<ProjectEventArgs> ProjectProcessing { get; set; }
    }
}
