using MSD.Loop.Business.Factories;
using MSD.Loop.Business.Interfaces;
using MSD.Loop.Business.Services;
using MSD.Loop.Business.Servicess;
using MSD.Loop.DTO.Factories;
using MSD.Loop.DTO.Interfaces;
using MSD.Loop.Engine.Configurations;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Infrastructure.Configurations;
using MSD.Loop.Infrastructure.Interfaces;
using MSD.Loop.Providers.Authentication;
using MSD.Loop.Providers.Configuration;
using MSD.Loop.Providers.Loggers;
using MSD.Loop.Providers.Mailers;
using MSD.Loop.Providers.Roles;
using MSD.Loop.Repository.Data;
using Unity;

namespace MSD.Loop.API.IoC
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
            unityContainer.RegisterType<IApplicationSettingRepository, ApplicationSettingRepository>();
            unityContainer.RegisterType<IUnitOfWork, UnitOfWork>();
            unityContainer.RegisterType<IApplicationInitializer, ApplicationInitializer>();

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

            unityContainer.RegisterType<ICompanyProjectAreaRepository, CompanyProjectAreaRepository>();
            unityContainer.RegisterType<ICompanyService, CompanyService>();
            unityContainer.RegisterType<IRoleService, RoleService>();
            unityContainer.RegisterType<ICompanyFactory, CompanyFactory>();
            unityContainer.RegisterType<IUserFactory, UserFactory>();
            
            //register providers
            unityContainer.RegisterType<IMailerProvider, Mailer>();
            unityContainer.RegisterType<IRoleProvider, RoleProvider>();
            unityContainer.RegisterType<ILoggerProvider, Logger>();
            unityContainer.RegisterType<IAuthenticationProvider, AuthenticationProvider>();

            unityContainer.RegisterType<ITokenProvider, TokenProvider>();
            unityContainer.RegisterType<IAppSettingsProvider, AppSettingsProvider>();
            unityContainer.RegisterType<IMailerProvider, Mailer>();

            //var connFactory = unityContainer.Resolve<ConnectionFactory>();
            //unityContainer.Resolve<RoleProvider>();
            //unityContainer.RegisterInstance<IDbConnection>(connFactory.GetConnection());
            //unityContainer.RegisterInstance<IDbTransaction>(connFactory.GetConnection().BeginTransaction());

            return unityContainer;
        }
    }
}
