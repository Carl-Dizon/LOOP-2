using MSD.Loop.Engine.Interfaces;
using System.Data;
using MSD.Loop.Engine.Models;
using System.Collections.Generic;
using System;
using Dapper;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyRepository : BaseRepository, ICompanyRepository
    {
        public CompanyRepository(IDbTransaction transaction) : base(transaction)
        {

        }

        public IEnumerable<Company> All()
        {
            var query = @"SELECT * FROM Companies";
            var results = Connection.Query<Company>(query, transaction: Transaction);
            if (results == null)
            {
                throw new System.Exception("No companies found.");
            }

            return results;
        }

        public Company Create(Company entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }

            var query = @"INSERT INTO Companies(Name, CreatedOn, LastModifiedOn, IsArchived, CreatedByUserId) VALUES
                        (@Name, @CreatedOn, @LastModifiedOn, @IsArchived, @CreatedByUserId); SELECT CAST(SCOPE_IDENTITY() as int)";
            var result = Connection.QuerySingle<int>(query,
                param: new
                {
                    Name = entity.Name,
                    CreatedOn = entity.CreatedOn,
                    LastModifiedOn = entity.CreatedOn,
                    IsArchived = entity.IsArchived,
                    CreatedByUserId = entity.CreatedByUser.Id
                }, transaction: Transaction);

            entity.Id = result;
            return entity;
        }

        public void Delete(Company entity)
        {
            var query = @"DELETE FROM Companies WHERE Id = @Id";
            Connection.Execute(query, param: new { Id = entity.Id }, transaction: Transaction);
        }

        public Company Find(int id)
        {
            var query = @"SELECT * FROM Companies WHERE Id = @Id";
            var company = Connection.QueryFirstOrDefault<Company>(query, param: new { Id = id }, transaction: Transaction);
            if (company == null)
            {
                throw new System.Exception("No company with the id found.");
            }

            return company;
        }

        public Company FindByName(string name)
        {
            var query = @"SELECT * FROM Companies WHERE Name = @Name";
            var company = Connection.QueryFirstOrDefault<Company>(query, param: new { Name = name }, transaction: Transaction);
            if (company == null)
            {
                throw new System.Exception("No permission with the name found.");
            }

            return company;
        }

        public void Update(Company entity)
        {
            var query = @"UPDATE Companies SET Name = @Name, 
                        LastModifiedOn = @LastModifiedOn,
                        IsArchived = @IsArchived WHERE Id = @Id";
            var result = Connection.Execute(query,
               param: new
               {
                   Name = entity.Name,
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
