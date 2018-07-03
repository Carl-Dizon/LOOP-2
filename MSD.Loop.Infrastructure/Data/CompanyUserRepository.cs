using MSD.Loop.Engine.Interfaces;
using System.Data;
using MSD.Loop.Engine.Models;
using System.Collections.Generic;
using Dapper;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyUserRepository : BaseRepository, ICompanyUserRepository
    {
        public CompanyUserRepository(IDbTransaction transaction) : base(transaction)
        {
        }

        public IEnumerable<CompanyUser> All()
        {
            throw new System.NotImplementedException();
        }

        public CompanyUser Create(CompanyUser entity)
        {
            try
            {
                var query = @"INSERT INTO CompanyUsers (CompanyId, UserId, Username, IsRegistered, CreatedById, IsArchived, CreatedOn, LastModifiedOn) 
                            VALUES(@CompanyId, @UserId, @Username, @IsRegistered, @CreatedById, @IsArchived, @CreatedOn, @LastModifiedOn);
                            SELECT CAST(SCOPE_IDENTITY() as int)";
                var result = Connection.QuerySingle<int>(query, param: new
                {
                    CompanyId = entity.Company.Id,
                    UserId = entity.User.Id,
                    Username = "default username",
                    IsRegistered = entity.IsRegistered,
                    CreatedById = entity.CreatedBy != null ? entity.CreatedBy.Id : -1,
                    IsArchived = entity.IsArchived,
                    CreatedOn = entity.CreatedOn,
                    LastModifiedOn = entity.LastModifiedOn

                }, transaction: Transaction);

                entity.Id = result;
                return entity;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception("Unable to register company user.");
            }
        }

        public void Delete(CompanyUser entity)
        {
            var query = @"DELETE FROM CompanyUsers WHERE Id = @Id";
            Connection.Execute(query, param: new { Id = entity.Id }, transaction: Transaction);

        }

        public CompanyUser Find(int id)
        {
            var query = @"SELECT * FROM CompanyUsers WHERE Id = @Id";
            var companyUser = Connection.QueryFirstOrDefault<CompanyUser>(query, param: new { Id = id }, transaction: Transaction);
            if (companyUser == null)
            {
                throw new System.Exception("No company user with the id found.");
            }

            return companyUser;
        }

        public CompanyUser FindByName(string name)
        {
            var query = @"SELECT * FROM CompanyUser WHERE Username = @Name";
            var companyUser = Connection.QueryFirstOrDefault<CompanyUser>(query, param: new { Name = name }, transaction: Transaction);
            if (companyUser == null)
            {
                throw new System.Exception("No company user with the name found.");
            }

            return companyUser;
        }

        public void Update(CompanyUser entity)
        {
            var query = @"UPDATE CompanyUsers SET Username = @Username,
                        LastModifiedOn = @LastModifiedOn,
                        IsArchived = @IsArchived WHERE Id = @Id";
            var result = Connection.Execute(query,
               param: new
               {
                   Username = entity.Username,
                   LastModifiedOn = entity.CreatedOn,
                   IsArchived = entity.IsArchived,
                   Id = entity.Id
               },
               transaction: Transaction
           );

            if (result < 1)
            {
                throw new System.Exception("Unable to update permission.");
            }
        }
    }
}
