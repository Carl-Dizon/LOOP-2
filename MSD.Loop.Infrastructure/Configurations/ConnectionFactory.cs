using MSD.Loop.Infrastructure.Interfaces;
using System;
using System.Configuration;
using System.Data;
using System.Data.Common;

namespace MSD.Loop.Infrastructure.Configurations
{
    public class ConnectionFactory : IConnectionFactory
    {
        private readonly string _connectionString = ConfigurationManager.ConnectionStrings["LoopDb"].ConnectionString;
        public IDbConnection GetConnection()
        {
            try
            {
                var factory = DbProviderFactories.GetFactory("System.Data.SqlClient");
                var connection = factory.CreateConnection();
                if(connection == null)
                {
                    throw new Exception("Connection to database cannot be established.");
                }

                if (string.IsNullOrEmpty(_connectionString))
                {
                    throw new Exception("Connection string to database is invalid.");
                }

                connection.ConnectionString = _connectionString;
                connection.Open();

                return connection;

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
