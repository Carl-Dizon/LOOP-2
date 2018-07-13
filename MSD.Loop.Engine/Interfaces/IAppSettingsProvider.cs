using MSD.Loop.Engine.Configurations;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IAppSettingsProvider
    {
        void Initialize();
        ApplicationSetting CreateSetting(string name);
        void DeleteSetting(string name);
        void DeleteSetting(ApplicationSetting role);
        IEnumerable<ApplicationSetting> GetAllSettings();
    }
}
