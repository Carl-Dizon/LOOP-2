﻿using MSD.Loop.Infrastructure.Configurations;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Unity.AspNet.WebApi;

namespace MSD.Loop.API
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var unityContainer = new UnityContainerBuilder().Build();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(unityContainer);
        }
    }
}
