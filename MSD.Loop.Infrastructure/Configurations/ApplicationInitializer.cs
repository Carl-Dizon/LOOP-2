using Dapper;
using MSD.Loop.Common.Interfaces;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;
using MSD.Loop.Infrastructure.Interfaces;
using System;
using System.Data;

namespace MSD.Loop.Infrastructure.Configurations
{
    /// <summary>
    /// An instance used in setting up the 
    /// </summary>
    public class ApplicationInitializer : IApplicationInitializer
    {
       
        private readonly IDatabaseInitializer _dbInitializer;

        public ApplicationInitializer(IDatabaseInitializer dbInitializer)
        {
            _dbInitializer = dbInitializer;
        }

        public void Initialize()
        {
           
            _dbInitializer.BootstrapAppSettings();
            _dbInitializer.BootstrapAppDatabases();
        }


    }
}
