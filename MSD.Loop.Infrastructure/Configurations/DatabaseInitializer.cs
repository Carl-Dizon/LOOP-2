using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using MSD.Loop.Infrastructure.Interfaces;
using MSD.Loop.Engine.Models;
using MSD.Loop.Engine.Interfaces;

namespace MSD.Loop.Infrastructure.Configurations
{
    public class DatabaseInitializer : IDatabaseInitializer
    {
        //TODO: OR USE the UnitOfWOrk
        private readonly IApplicationSettingRepository _appSettingRepository;
        private readonly IConnectionFactory _connectionFactory;
        private readonly IDbConnection _connection;
        private readonly IDbTransaction _transaction;

        public DatabaseInitializer(IConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
            var connection = _connectionFactory.GetConnection();
            if (connection == null)
            {
                throw new NullReferenceException("Connection to application database cannot be established. ");
            }

            _connection = connection;

            var transaction = connection.BeginTransaction();
            if (transaction == null)
            {
                throw new NullReferenceException("Transaction object from connection cannot be established.");
            }

            _transaction = transaction;

        }

        public void BootstrapAppSettings()
        {
            try
            {
                //try fetch appsettings if any exist
                var sqlQuery = @"SELECT * FROM ApplicationSettings";

                var returnedRows = _connection.Execute(sqlQuery, transaction: _transaction);
                if (returnedRows == 0)
                {
                    //create or insert the application setting table
                    sqlQuery = @"INSERT INTO ApplicationSettings";
                }
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public void BootstrapAppDatabases()
        {
            //check tables
            //var query = @"SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA";


            //get/create default user
            var query = @"SELECT * FROM Users WHERE IsDefault = @IsDefault";
            var defaultUser = _connection.QueryFirstOrDefault<User>(query, param: new { IsDefault = true }, transaction: _transaction);
            if (defaultUser == null)
            {
                //TODO: thorw or create default access super admin here
                throw new NullReferenceException("Default user not found");
            }

            //get/create default company
            query = @"SELECT * FROM Companies WHERE IsDefault = @IsDefault";
            var defaultCompany = _connection.QueryFirstOrDefault<Company>(query, param: new { IsDefault = true }, transaction: _transaction);
            if (defaultCompany == null)
            {
                //TODO: throw or create default company here
                throw new NullReferenceException("Default company not found");
            }

            //get/create superadmin access level
            query = @"SELECT * FROM AccessLevels WHERE Name = @Name";
            var superAccess = _connection.QueryFirstOrDefault<AccessLevel>(query, param: new { Name = "superadmin" }, transaction: _transaction);
            if (superAccess == null)
            {
                //TODO: thorw or create default access super admin here
                query = @"INSERT INTO AccessLevels";
            }

            //create default companyuser from default company and default user
            query = @"INSERT INTO CompanyUsers (UserId, CompanyId, Username, CreatedByUserId) VALUES(@UserId, @CompanyId, @Username, @CreatedByUserId)";
            var affectedRows = _connection.Execute(query, param: new
            {
                UserId = defaultUser.Id,
                CompanyId = defaultCompany.Id,
                Username = defaultUser.Email,
                CreatedByUserId = defaultUser.Id
            }, transaction: _transaction);

            if (affectedRows == 0)
            {
                //TODO: thorw or create default access super admin here
                throw new NullReferenceException("Default company user not created");
            }

        }
    }
}
