using MSD.Loop.Common.Interfaces;
using MSD.Loop.Common.Modules;
using MSD.Loop.Engine.Interfaces;
using System;
using System.Configuration;

namespace MSD.Loop.Engine.Configurations
{
    public class ConfigurationFactory : IConfigurationFactory
    {
        private readonly IMailer _mailer;
        private readonly ILogger _logger;
        private readonly ICompanyAccessLevelProvider _roleManager;
        private readonly IAuthenticationProvider _authManager;

        private readonly ApplicationEvents _events;

        public ConfigurationFactory()
        {
            //Instantiate the configuration based created dependencies like the mailer and logger
            var config = ConfigurationManager.GetSection("loopEngine") as LoopEngineConfigurationSection;
            if(config != null)
            {

                _mailer = Activator.CreateInstance(Type.GetType(config.Mailer.Type)) as IMailer;
                _logger = Activator.CreateInstance(Type.GetType(config.Logger.Type)) as ILogger;
                
                _roleManager = Activator.CreateInstance(Type.GetType(config.RoleProvider.Type)) as ICompanyAccessLevelProvider;
                _authManager = Activator.CreateInstance(Type.GetType(config.AuthenticationProvider.Type)) as IAuthenticationProvider;
            }

            //handle modules
            _events = new ApplicationEvents();
            foreach(ModuleElement moduleElement in config.Modules)
            {
                IApplicationModule module = Activator.CreateInstance(Type.GetType(moduleElement.Name)) as IApplicationModule;
                module.Initialize(_events);
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

        public ApplicationEvents GetEvents()
        {
            return _events;
        }

        public ICompanyAccessLevelProvider GetRoleProvider()
        {
            return _roleManager;
        }

        public IAuthenticationProvider GetAuthProvider()
        {
            throw new NotImplementedException();
        }
    }
}
