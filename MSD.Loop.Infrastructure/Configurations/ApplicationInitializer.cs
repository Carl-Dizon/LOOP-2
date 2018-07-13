using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Infrastructure.Interfaces;

namespace MSD.Loop.Infrastructure.Configurations
{
    public class ApplicationInitializer : IApplicationInitializer
    {
        //Currently, this is not used because using the 'strict' provider approach
        //in loading types is not working well with Unity and Activator.CreateInstance
        private readonly IConfigurationFactory _configurationFactory;

        //Currently, this is all injected via Unity
        private readonly IAppSettingsProvider _appSettingProvider;
        private readonly IRoleProvider _roleProvider;

        public ApplicationInitializer(IAppSettingsProvider appSettingProvider, IRoleProvider roleProvider)
        {
            _appSettingProvider = appSettingProvider;
            _roleProvider = roleProvider;
        }

        public void Initialize()
        {
            try
            {
                _appSettingProvider.Initialize();
                _roleProvider.Initialize();
            }
            catch (System.Exception)
            {
                throw;
            }
           
        }
    }
}
