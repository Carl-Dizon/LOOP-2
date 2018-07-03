using MSD.Loop.Common.Interfaces;
using MSD.Loop.Common.Modules;

namespace MSD.Loop.Modules.Projects
{
    public class ProjectMngtModule : IApplicationModule
    {
        public ProjectMngtModule()
        {

        }

        public void Initialize(ApplicationEvents events)
        {
            //events.ProjectProcessing += OnProjectProcessing;
        }

        public void OnProjectProcessing(ApplicationEvents e)
        {
            //TODO: handle it here
        }
    }
}
