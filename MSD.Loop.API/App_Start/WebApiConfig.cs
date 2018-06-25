using MSD.Loop.Engine.Configurations;
using MSD.Loop.Engine.Factories;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Infrastructure.Configurations;
using MSD.Loop.Infrastructure.Data;
using System.Web.Http;
using Unity;
using Unity.AspNet.WebApi;

namespace MSD.Loop.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
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

            unityContainer.RegisterType<ICompanyService, CompanyService>();
            unityContainer.RegisterType<IUnitOfWork, UnitOfWork>();

            unityContainer.RegisterType<ICompanyFactory, CompanyFactory>();
            unityContainer.RegisterType<IUserFactory, UserFactory>();

            unityContainer.RegisterType<IProjectTaskWorkRepository, ProjectTaskWorkRepository>();
            config.DependencyResolver = new UnityDependencyResolver(unityContainer);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );


        }
    }
}
