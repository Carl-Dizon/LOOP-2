using MSD.Loop.Engine.Interfaces;
using System.Linq;
using MSD.Loop.Engine.Configurations;
using System.Collections.Generic;
using MSD.Loop.Engine.Models;
using System;

namespace MSD.Loop.Providers.Configuration
{
    public class AppSettingsProvider : IAppSettingsProvider
    {
        private readonly IUnitOfWork _uow;
        public AppSettingsProvider(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public ApplicationSetting CreateSetting(string name)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteSetting(string name)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteSetting(ApplicationSetting role)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<ApplicationSetting> GetAllSettings()
        {
            throw new System.NotImplementedException();
        }

        public void Initialize()
        {
            try
            {
                //var query = @"SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA";
                //try fetch appsettings if any exist
                var returnedRows = _uow.ApplicationSettingRepo.All();
                if (returnedRows.ToList().Count == 0)
                {
                    //TODO: create or insert the application settings here if none found
                    //these settings will be used to check if the defaults have been initialized
                    //during bootstrap so that it will not go through the process below each time
                    //during application is triggered during an http request.

                }

                //STEP: create default user
                User defaultUser = null;
                var firstUser = _uow.UserRepository
                    .All()
                    .FirstOrDefault(u => u.IsDefault);

                if (firstUser == null)
                {
                    firstUser = new DefaultUser
                    {
                        Password = "adminpasswordhashed", //TODO: hash this
                        CreatedOn = DateTime.UtcNow,
                        LastModifiedOn = DateTime.UtcNow,
                    };

                    firstUser = _uow.UserRepository.Create(firstUser);
                    firstUser.CreatedById = firstUser.Id;
                    _uow.UserRepository.Update(defaultUser);
                    _uow.Commit();
                }

                //get/create default company
                var defaultCompany = _uow.CompanyRepository
                    .All()
                    .FirstOrDefault(c => c.IsDefault);

                if (defaultCompany == null)
                {
                    defaultCompany = new DefaultCompany
                    {
                        CreatedByUser = firstUser,
                        CreatedOn = DateTime.UtcNow,
                        LastModifiedOn = DateTime.UtcNow,
                        IsDefault = true
                    };

                    _uow.CompanyRepository.Create(defaultCompany);
                    _uow.Commit();
                }

                //check if a default companyuser (application default user) is already created
                var defaultCompanyUser = _uow.CompanyUserRepository
                    .All()
                    .FirstOrDefault(cu => (cu.UserId == firstUser.Id)
                    && (cu.CompanyId == defaultCompany.Id));

                if (defaultCompanyUser == null)
                {
                    defaultCompanyUser = new CompanyUser
                    {
                        CompanyId = defaultCompany.Id,
                        UserId = firstUser.Id,
                        CreatedById = firstUser.Id,
                        CreatedOn = DateTime.UtcNow,
                        LastModifiedOn = DateTime.UtcNow,
                        IsArchived = false,
                        Username = "administrator",
                        IsRegistered = true,
                        IsDefault = true
                    };

                    _uow.CompanyUserRepository.Create(defaultCompanyUser);
                    _uow.Commit();
                }
            }
            catch (System.Exception ex)
            {
                throw;
            }

        }
    }
}
