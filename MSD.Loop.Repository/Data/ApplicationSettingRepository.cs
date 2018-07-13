using MSD.Loop.Engine.Interfaces;
using System.Data;
using MSD.Loop.Engine.Configurations;
using System.Collections.Generic;

namespace MSD.Loop.Repository.Data
{
    public class ApplicationSettingRepository : BaseRepository, IApplicationSettingRepository
    {

        public ApplicationSettingRepository(IDbTransaction transaction) : base(transaction)
        {

        }

        public IEnumerable<ApplicationSetting> All()
        {
            return new List<ApplicationSetting>();
        }

        public ApplicationSetting Create(ApplicationSetting entity)
        {
            throw new System.NotImplementedException();
        }

        public void Delete(ApplicationSetting entity)
        {
            throw new System.NotImplementedException();
        }

        public ApplicationSetting Find(int id)
        {
            throw new System.NotImplementedException();
        }

        public ApplicationSetting FindByName(string name)
        {
            throw new System.NotImplementedException();
        }

        public void Update(ApplicationSetting entity)
        {
            throw new System.NotImplementedException();
        }
    }
}
