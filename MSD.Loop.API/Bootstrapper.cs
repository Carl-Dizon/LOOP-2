using MSD.Loop.Common.Interfaces;
using MSD.Loop.Engine.Configurations;
using MSD.Loop.Engine.Factories;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Services;
using MSD.Loop.Infrastructure.Configurations;
using MSD.Loop.Infrastructure.Data;
using MSD.Loop.Providers.Mailers;
using MSD.Loop.Providers.Roles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Unity;
using Unity.AspNet.WebApi;

namespace MSD.Loop.API
{
    public static class Bootstrapper
    {
        public static void Initialise()
        {
            //will be moved to another class
            var unityContainer = new UnityContainer();

            unityContainer.RegisterType<IConfigurationFactory, ConfigurationFactory>();
            unityContainer.RegisterType<IConnectionFactory, ConnectionFactory>();

            unityContainer.RegisterType<IUserRepository, UserRepository>();
            unityContainer.RegisterType<ICompanyRepository, CompanyRepository>();
            unityContainer.RegisterType<ICompanyUserRepository, CompanyUserRepository>();
            unityContainer.RegisterType<ICompanyProjectRepository, CompanyProjectRepository>();

            unityContainer.RegisterType<ICompanyAccessRoleRepository, CompanyAccessRoleRepository>();
            unityContainer.RegisterType<ICompanyMaterialStockRepository, CompanyMaterialStockRepository>();
            unityContainer.RegisterType<ICompanyProjectUserRepository, ProjectUserRepository>();
            unityContainer.RegisterType<ICompanyUserRoleRepository, CompanyUserRoleRepository>();

            unityContainer.RegisterType<ICompanyProjectUserRoleRepository, CompanyProjectUserRoleRepository>();
            unityContainer.RegisterType<ICompanyProjectTaskUserRepository, ProjectTaskUserRepository>();
            unityContainer.RegisterType<IProjectTaskRepository, ProjectTaskRepository>();
            unityContainer.RegisterType<IProjectTaskMaterialRepository, ProjectTaskMaterialRepository>();
            unityContainer.RegisterType<IProjectTaskWorkRepository, ProjectTaskWorkRepository>();

            unityContainer.RegisterType<ICompanyService, CompanyService>();
            unityContainer.RegisterType<ICompanyFactory, CompanyFactory>();
            unityContainer.RegisterType<IUserFactory, UserFactory>();

            unityContainer.RegisterType<IApplicationSettingRepository, ApplicationSettingRepository>();
            unityContainer.RegisterType<IApplicationInitializer, ApplicationInitializer>();
            unityContainer.RegisterType<IUnitOfWork, UnitOfWork>();

            //register providers
            unityContainer.RegisterType<IMailer, Mailer>();
            unityContainer.RegisterType<ICompanyAccessLevelProvider, CompanyAccessRoleProvider>();
            //unityContainer.RegisterType<ILogger, Logger>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(unityContainer);

            //var configFactory = unityContainer.Resolve<ConfigurationFactory>();
            //var connFactory = unityContainer.Resolve<ConnectionFactory>();
            //var roleProvider = configFactory.GetRoleProvider();
            //roleProvider.Initialize(connFactory.GetConnection());

            var appInitializer = unityContainer.Resolve<ApplicationInitializer>();
            appInitializer.Initialize();
           
        }
    }
}