using MSD.Loop.Common.Modules;
using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Services
{
    public class ProjectService : IProjectService
    {
        private ApplicationEvents _applicationEvents;
        private IConfigurationFactory _configurationFactory;

        public ProjectService(IConfigurationFactory configurationFactory)
        {
            _configurationFactory = configurationFactory;
            _applicationEvents = configurationFactory.GetEvents();
        }

        public void Test()
        {
            if(_applicationEvents.ProjectCreated != null)
            {
                var projectCreatedArgs = new ProjectCreatedEventArgs();

                //Fire up the event
                _applicationEvents.ProjectCreated(projectCreatedArgs);
            }
        }
    }
}
