using MSD.Loop.Business.Factories;
using MSD.Loop.Business.Interfaces;
using MSD.Loop.Business.Servicess;
using MSD.Loop.Common.Interfaces;
using MSD.Loop.DTO.Factories;
using MSD.Loop.DTO.Interfaces;
using MSD.Loop.Engine.Configurations;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Infrastructure.Data;
using MSD.Loop.Infrastructure.Interfaces;
using MSD.Loop.Providers.Mailers;
using MSD.Loop.Providers.Roles;
using System.Data;
using Unity;

namespace MSD.Loop.Infrastructure.Configurations
{
    /// <summary>
    /// Register all dependencies for the bootstrapper to use on the client application
    /// </summary>
    public class UnityContainerBuilder : IUnityContainerBuilder
    {
        public UnityContainer Build()
        {
            //will be moved to another class
            var unityContainer = new UnityContainer();

            unityContainer.RegisterType<IConfigurationFactory, ConfigurationFactory>();
            unityContainer.RegisterType<IConnectionFactory, ConnectionFactory>();

            unityContainer.RegisterType<IAccessLevelRepository, AccessLevelRepository>();
            unityContainer.RegisterType<IAccessLevelPermissionRepository, AccessLevelPermissionRepository>();
            unityContainer.RegisterType<IPermissionRepository, PermissionRepository>();
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
            unityContainer.RegisterType<IDatabaseInitializer, DatabaseInitializer>();
            unityContainer.RegisterType<IUnitOfWork, UnitOfWork>();

            //register providers
            unityContainer.RegisterType<IMailer, Mailer>();
            unityContainer.RegisterType<ICompanyAccessLevelProvider, CompanyAccessRoleProvider>();
            //unityContainer.RegisterType<ILogger, Logger>();

            unityContainer.RegisterType<IApplicationInitializer, ApplicationInitializer>();
            unityContainer.RegisterType<IUnitOfWork, UnitOfWork>();

            var configFactory = unityContainer.Resolve<ConfigurationFactory>();
            var connFactory = unityContainer.Resolve<ConnectionFactory>();
            unityContainer.RegisterInstance<IDbConnection>(connFactory.GetConnection());
            unityContainer.RegisterInstance<IDbTransaction>(connFactory.GetConnection().BeginTransaction());

            var applicationInitializer = unityContainer.Resolve<ApplicationInitializer>();
            applicationInitializer.Initialize();

            return unityContainer;
        }
    }
}
