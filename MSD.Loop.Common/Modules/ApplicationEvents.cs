using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Common.Modules
{
    public delegate void ApplicationModuleDelegate<T>(T e);
    public class ApplicationEvents
    {
        public ApplicationModuleDelegate<ProjectCreatedEventArgs> ProjectCreated { get; set; }
    }
}
