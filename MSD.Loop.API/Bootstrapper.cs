using MSD.Loop.Engine.Configurations;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Services;
using MSD.Loop.Infrastructure.Configurations;
using MSD.Loop.Infrastructure.Data;
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

            unityContainer.RegisterType<ICompanyService, CompanyService>();
           // unityContainer.RegisterType<ICompanyFactory, CompanyFactory>();
           // unityContainer.RegisterType<IUserFactory, UserFactory>();
            unityContainer.RegisterType<IUnitOfWork, UnitOfWork>();
            unityContainer.RegisterType<IProjectTaskWorkRepository, ProjectTaskWorkRepository>();

            //config.DependencyResolver = new UnityDependencyResolver(unityContainer);
            //DependencyResolver.SetResolver(new Unity.Mvc3.UnityDependencyResolver(unityContainer));
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(unityContainer);
        }
    }
}