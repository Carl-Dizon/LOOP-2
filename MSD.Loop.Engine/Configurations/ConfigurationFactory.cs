using MSD.Loop.Common.Interfaces;
using MSD.Loop.Common.Modules;
using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Configurations
{
    public class ConfigurationFactory : IConfigurationFactory
    {
        IMailer _mailer;
        ILogger _logger;
        IRoleProvider _roleProvider;
        LoopEngineEvent _loopEvents;

        public ConfigurationFactory()
        {
            //Instantiate the configuration based created dependencies like the mailer and logger
            var config = ConfigurationManager.GetSection("loopEngine") as LoopEngineConfigurationSection;
            if(config != null)
            {
                _mailer = Activator.CreateInstance(Type.GetType(config.Mailer.Type)) as IMailer;
                _logger = Activator.CreateInstance(Type.GetType(config.Logger.Type)) as ILogger;
                
                _roleProvider = Activator.CreateInstance(Type.GetType(config.Logger.Type)) as IRoleProvider;
            }
            
        }

        //factory methods
        public IMailer GetMailer()
        {
            return _mailer;
        }

        public ILogger GetLogger()
        {
            return _logger;
        }

        public LoopEngineEvent GetEvents()
        {
            return _loopEvents;
        }
    }
}
