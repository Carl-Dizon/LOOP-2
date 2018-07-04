using MSD.Loop.Common.Interfaces;
using MSD.Loop.Common.Modules;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Infrastructure.Interfaces;
using System;
using System.Configuration;

namespace MSD.Loop.Engine.Configurations
{
    public class ConfigurationFactory : IConfigurationFactory
    {
        private readonly IMailerProvider _mailer;
        private readonly ILoggerProvider _logger;
        private readonly IRoleProvider _roleManager;
        private readonly IAuthenticationProvider _authManager;
        private readonly ITokenProvider _tokenManager;

        private readonly ApplicationEvents _events;

        public ConfigurationFactory()
        {
            //Instantiate the configuration based created dependencies like the mailer and logger
            var config = ConfigurationManager.GetSection("loopEngine") as LoopEngineConfigurationSection;
            if(config != null)
            {

                _mailer = Activator.CreateInstance(Type.GetType(config.Mailer.Type)) as IMailerProvider;
                _logger = Activator.CreateInstance(Type.GetType(config.Logger.Type)) as ILoggerProvider;
                
                _roleManager = Activator.CreateInstance(Type.GetType(config.RoleProvider.Type)) as IRoleProvider;
                _authManager = Activator.CreateInstance(Type.GetType(config.AuthenticationProvider.Type)) as IAuthenticationProvider;
                _tokenManager = Activator.CreateInstance(Type.GetType(config.TokenProvider.Type)) as ITokenProvider;
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
        public IMailerProvider GetMailer()
        {
            return _mailer;
        }

        public ILoggerProvider GetLogger()
        {
            return _logger;
        }

        public ApplicationEvents GetEvents()
        {
            return _events;
        }

        public IRoleProvider GetRoleManager()
        {
            return _roleManager;
        }

        public IAuthenticationProvider GetAuthenticationManager()
        {
            return _authManager;
        }

        public ITokenProvider GetTokenManager()
        {
            return _tokenManager;
        }
    }
}
