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
        private readonly IUnitOfWork _uow;
        private readonly IConnectionFactory _connectionFactory;

        private readonly IDbConnection _connection;
        private readonly IDbTransaction _transaction;

        public DatabaseInitializer(IUnitOfWork unitOfWork, IConnectionFactory connectionFactory)
        {
            _uow = unitOfWork;
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

        public void BootstrapAppDatabases()
        {
            //check tables
            //var query = @"SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA";

            //try fetch appsettings if any exist
            var sqlQuery = @"SELECT * FROM ApplicationSettings";

            var returnedRows = _connection.Execute(sqlQuery, transaction: _transaction);
            if (returnedRows == 0)
            {
                //create or insert the application setting table
                sqlQuery = @"INSERT INTO ApplicationSettings";
            }
        }

        private Company CreateDefaultUserAndCompany()
        {

            //STEP: create default user
            User defaultUser = null;
            var query = @"SELECT * FROM Users WHERE IsDefault = @IsDefault";
            var firstUser = _connection.QueryFirstOrDefault<User>(query, param: new { IsDefault = true }, transaction: _transaction);
            if (firstUser == null)
            {
                //create default/first user
                firstUser = new User
                {
                    Firstname = "Default",
                    Lastname = "Default",
                    Email = "default@noreply.com",
                    Password = "adminpasswordhashed", //TODO: hash this
                    IsVerified = true,
                    IsDefault = true,
                    CreatedOn = DateTime.UtcNow,
                    LastModifiedOn = DateTime.UtcNow,
                    IsArchived = false
                };

                firstUser = _uow.UserRepository.Create(firstUser);
                firstUser.CreatedBy = firstUser;
                _uow.UserRepository.Update(defaultUser);
                _uow.Commit();
            }

            //get/create default company
            query = @"SELECT * FROM Companies WHERE IsDefault = @IsDefault";
            var defaultCompany = _connection.QueryFirstOrDefault<Company>(query, param: new { IsDefault = true }, transaction: _transaction);
            if (defaultCompany == null)
            {
                defaultCompany = new Company
                {
                    CreatedByUser = firstUser,
                    Name = "Default company",
                    IsDefault = true,
                    Description = "Default company",
                    CreatedOn = DateTime.UtcNow,
                    LastModifiedOn = DateTime.UtcNow,
                    IsArchived = false,
                    LogoUrl = "",
                    WebUrl = ""
                };

                _uow.CompanyRepository.Create(defaultCompany);
                _uow.Commit();
            }

            //create default companyuser from default company and default user
            query = @"INSERT INTO CompanyUsers (UserId, CompanyId, Username, CreatedByUserId) VALUES(@UserId, @CompanyId, @Username, @CreatedByUserId)";
            var affectedRows = _connection.Execute(query, param: new
            {
                UserId = firstUser.Id,
                CompanyId = defaultCompany.Id,
                Username = firstUser.Email,
                CreatedByUserId = firstUser.Id

            }, transaction: _transaction);
            _transaction.Commit();

            return defaultCompany;
        }
    }
}
