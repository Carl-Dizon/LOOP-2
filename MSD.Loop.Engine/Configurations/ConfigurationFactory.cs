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
        private IMailerProvider _mailer;
        private ILoggerProvider _logger;
        private IRoleProvider _roleManager;
        private IAuthenticationProvider _authManager;
        private ITokenProvider _tokenManager;
        private ApplicationEvents _events;

        //TODo: use this instead but will not be using the PROVIDER pattern but regular constructor engine with UNITY
        public ConfigurationFactory(IRoleProvider roleProvider)
        {
            _roleManager = roleProvider;
        }

        public ConfigurationFactory()
        {
            var config = ConfigurationManager.GetSection("loopEngine") as LoopEngineConfigurationSection;
            if (config != null)
            {
                try
                {
                    //TODO: investigate why when using the ACTIVATOR class in fetching the objects as providers, it
                    //does not work with UNITY at the moment. Still UNDER INVESTIGATION.

                    //_mailer = Activator.CreateInstance(Type.GetType(config.Mailer.Type)) as IMailerProvider;
                    //_logger = Activator.CreateInstance(Type.GetType(config.Logger.Type)) as ILoggerProvider;
                    //_roleManager = Activator.CreateInstance(Type.GetType(config.RoleProvider.Type)) as IRoleProvider;
                    //_authManager = Activator.CreateInstance(Type.GetType(config.AuthenticationProvider.Type)) as IAuthenticationProvider;
                    //_tokenManager = Activator.CreateInstance(Type.GetType(config.TokenProvider.Type)) as ITokenProvider;

                }
                catch (Exception)
                {
                    throw;
                }
              }

            // handle modules
            _events = new ApplicationEvents();
            foreach (ModuleElement moduleElement in config.Modules)
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
