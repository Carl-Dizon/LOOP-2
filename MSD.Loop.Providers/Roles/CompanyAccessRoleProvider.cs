using System;
using MSD.Loop.Common.Interfaces;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.Providers.Roles
{
    public class CompanyAccessRoleProvider : ICompanyAccessLevelProvider
    {
        private IDbConnection _connection;
        public void Initialize(IDbConnection connection)
        {
            try
            {
                _connection = connection ?? throw new ArgumentNullException("connection");

                var transaction = _connection.BeginTransaction();
                
                //TODO: MOVE TO APPLICATION INITIALIZER (includes the db initializer, etc)
                //get/create default user
                var query = @"SELECT * FROM Users WHERE IsDefault = @IsDefault";
                var defaultUser = _connection.QueryFirstOrDefault<User>(query, param: new { IsDefault = true }, transaction: transaction);
                if (defaultUser == null)
                {
                    //TODO: thorw or create default access super admin here
                    throw new NullReferenceException("Default user not found");
                }

                //get/create default company
                query = @"SELECT * FROM Companies WHERE IsDefault = @IsDefault";
                var defaultCompany = _connection.QueryFirstOrDefault<Company>(query, param: new { IsDefault = true }, transaction: transaction);
                if (defaultCompany == null)
                {
                    //TODO: throw or create default company here
                    throw new NullReferenceException("Default company not found");
                }

                //get/create superadmin access level
                query = @"SELECT * FROM AccessLevels WHERE Name = @Name";
                var superAccess = _connection.QueryFirstOrDefault<AccessLevel>(query, param: new { Name = "superadmin" }, transaction: transaction);
                if (superAccess == null)
                {
                    //TODO: thorw or create default access super admin here
                    throw new NullReferenceException("Admin level not found");
                }



                //create default companyuser from default company and default user
                query = @"INSERT INTO CompanyUsers (UserId, CompanyId, Username, CreatedByUserId) VALUES(@UserId, @CompanyId, @Username, @CreatedByUserId)";
                var affectedRows = _connection.Execute(query, param: new { UserId = defaultUser.Id, CompanyId = defaultCompany.Id, Username = defaultUser.Email, CreatedByUserId = defaultUser.Id}, transaction: transaction);
                if(affectedRows ==0)
                {
                    //TODO: thorw or create default access super admin here
                    throw new NullReferenceException("Default company user not created");
                }


                query = @"INSERT INTO CompanyAccessRoles(CompanyId, AccessLevelId) VALUES(@CompanyId, @AccessLevelId)";
                affectedRows = _connection.Execute(query, param: new { CompanyId = defaultCompany.Id, AccessLevelId = superAccess.Id}, transaction: transaction);

                transaction.Commit();

            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
