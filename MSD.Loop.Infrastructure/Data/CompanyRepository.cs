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

        public Company Add(Company entity)
        {
            if(entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            entity.Id = Connection.ExecuteScalar<int>(@"INSERT INTO Companies(Name, CreatedOn, LastModifiedOn, IsArchived, CreatedByUserId) VALUES 
                                                        (@Name, @CreatedOn, @LastModifiedOn, @IsArchived, @CreatedByUserId)", 
                param: new
                {
                    Name = entity.Name,
                    CreatedOn = entity.CreatedOn,
                    LastModifiedOn = entity.CreatedOn,
                    IsArchived = false,
                    CreatedByUserId = 1
                }, transaction: Transaction);


            return entity;
        }

        public void Delete(Company entity)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteById(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Company> FindAll()
        {
            throw new System.NotImplementedException();
        }

        public Company FindById(int id)
        {
            var query = @"SELECT * FROM Companies WHERE Id = @CompanyId;";
            var company =  Connection.QueryFirstOrDefault<Company>(query, param: new { CompanyId = id }, transaction: Transaction);
            return company;
        }

        public Company Update(Company entity)
        {
            throw new System.NotImplementedException();
        }
    }
}
