using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MSD.Loop.Engine.Models;
using Dapper;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyProjectAreaRepository : BaseRepository, ICompanyProjectAreaRepository
    {
        public CompanyProjectAreaRepository(IDbTransaction transaction) : base(transaction)
        {
        }

        public IEnumerable<CompanyProjectArea> All()
        {
            var query = @"SELECT * FROM CompanyProjectAreas";
            var results = Connection.Query<CompanyProjectArea>(query, transaction: Transaction);
            if (results == null)
            {
                throw new System.Exception("No project area found.");
            }

            return results;
        }

        public CompanyProjectArea Create(CompanyProjectArea entity)
        {
            try
            {
                var query = @"INSERT INTO CompanyProjectAreas (CompanyId, CreatedById, Name, Description, CreatedOn, LastModifiedOn, IsArchived) 
                                VALUES(@CompanyId, @CreatedById,@Name, @Description, @CreatedOn, @LastModifiedOn, @IsArchived); 
                                SELECT CAST(SCOPE_IDENTITY() as int)";
                var result = Connection.QuerySingle<int>(query, param: new
                {
                    CompanyId = entity.Company.Id,
                    CreatedById = entity.CreatedBy.Id,
                    Name = entity.Name,
                    Description = entity.Description,
                    CreatedOn = DateTime.UtcNow,
                    LastModifiedOn = DateTime.UtcNow,
                    IsArchived = entity.IsArchived

                }, transaction: Transaction);
                entity.Id = result;
                return entity;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception("Unable to add company project area.");
            }
        }

        public void Delete(CompanyProjectArea entity)
        {
            var query = @"DELETE FROM CompanyProjectAreas WHERE Id = @Id";
            Connection.Execute(query, param: new { Id = entity.Id }, transaction: Transaction);

        }

        public CompanyProjectArea Find(int id)
        {
            var query = @"SELECT * FROM CompanyProjectAreas WHERE Id = @Id";
            var area = Connection.QueryFirstOrDefault<CompanyProjectArea>(query, param: new { Id = id }, transaction: Transaction);
            if (area == null)
            {
                throw new System.Exception("No project area with the id found.");
            }

            return area;
        }

        public CompanyProjectArea FindByName(string name)
        {
            var query = @"SELECT * FROM CompanyProjectAreas WHERE Name = @Name";
            var area = Connection.QueryFirstOrDefault<CompanyProjectArea>(query, param: new { Name = name}, transaction: Transaction);
            if (area == null)
            {
                throw new System.Exception("No project area with the id found.");
            }

            return area;
        }

        public void Update(CompanyProjectArea entity)
        {
            var query = @"UPDATE CompanyProjectAreas SET Name = @Name WHERE Id = @Id";
            var result = Connection.Execute(query,
               param: new
               {
                   CompanyId = entity.Company.Id,
                   Name = entity.Name,
                   Description = entity.Description,
                   LastModifiedOn = DateTime.UtcNow,
                   IsArchived = entity.IsArchived,
                   Id = entity.Id
               },
               transaction: Transaction
           );

            if (result < 1)
            {
                throw new System.Exception("Unable to update project area.");
            }
        }
    }
}
