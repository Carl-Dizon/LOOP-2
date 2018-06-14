using MSD.Loop.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MSD.Loop.Common.Modules;

namespace MSD.Loop.Modules.Projects
{
    public class ProjectMngtModule : ILoopModule
    {
        public ProjectMngtModule()
        {

        }

        public void Initialize(LoopEngineEvent events)
        {
            events.ProjectProcessing += OnProjectProcessing;
        }

        public void OnProjectProcessing(ProjectEventArgs e)
        {
            //TODO: handle it here
        }
    }
}
