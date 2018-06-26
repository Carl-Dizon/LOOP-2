using MSD.Loop.Common.Interfaces;
using MSD.Loop.Engine.Interfaces;
using System;
using Dapper;

namespace MSD.Loop.Infrastructure.Configurations
{
    public class ApplicationInitializer : IApplicationInitializer
    {
        private readonly IApplicationSettingRepository _appSettingRepository;
        private readonly IConnectionFactory _connectionFactory;

        public ApplicationInitializer(IApplicationSettingRepository appSettingRepository, IConnectionFactory connectionFactory)
        {
            _appSettingRepository = appSettingRepository;
            _connectionFactory = connectionFactory;
        }

        public void Initialize()
        {
            InitializeAppSettings();
            InitializeDatabase();
        }

        private void InitializeAppSettings()
        {
            var connection = _connectionFactory.GetConnection();
            if(connection == null)
            {
                throw new NullReferenceException("Connection to application database cannot be established. ");
            }

            var transaction = connection.BeginTransaction();
            if(transaction == null)
            {
                throw new NullReferenceException("Transaction object from connection cannot be established.");
            }

            //try fetch appsettings if any exist
            var sqlQuery = @"SELECT * ApplicationSettings";
            var returnedRows = connection.Execute(sqlQuery, transaction: transaction);
            if(returnedRows == 0)
            {
                //create or insert the application setting table
                sqlQuery = @"INSERT INTO ApplicationSettings"
            }


        }

        private void InitializeDatabase()
        {

        }
    }
}
