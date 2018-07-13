using MSD.Loop.Engine.Configurations;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IApplicationSettingRepository
    {
        IEnumerable<ApplicationSetting> All();
        ApplicationSetting Find(int id);
        ApplicationSetting FindByName(string name);
        ApplicationSetting Create(ApplicationSetting entity);

        void Update(ApplicationSetting entity);
        void Delete(ApplicationSetting entity);
    }
}
