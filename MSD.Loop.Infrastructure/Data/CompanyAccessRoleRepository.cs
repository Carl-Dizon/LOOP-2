using MSD.Loop.Engine.Interfaces;
using System.Data;
using MSD.Loop.Engine.Models;
using System.Collections.Generic;
using Dapper;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyAccessRoleRepository : BaseRepository, ICompanyAccessRoleRepository
    {
        public CompanyAccessRoleRepository(IDbTransaction transaction) : base(transaction)
        {
        }

        public IEnumerable<CompanyAccessRole> AllByCompany(int id)
        {
            var query = @"SELECT * FROM Permissions where CompanyId = @CompanyId ";
            var results = Connection.Query<CompanyAccessRole>(query, param: new { CompanyId = id }, transaction: Transaction);
            if (results == null)
            {
                throw new System.Exception("No company access roles found.");
            }

            return results;
        }

        public CompanyAccessRole Create(CompanyAccessRole entity)
        {
            try
            {

                var query = @"INSERT INTO CompanyAccessRoles (AccessLevelId, CompanyId) VALUES(@AccessLevelId, @CompanyId); SELECT CAST(SCOPE_IDENTITY() as int)";
                var result = Connection.QuerySingle<int>(query, param: new { AccessLevelId = entity.AccessLevel.Id, CompanyId = entity.Company.Id }, transaction: Transaction);
                entity.Id = result;
                return entity;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception("Unable to add company access role. Please check logs.");
            }
        }

        public void Delete(CompanyAccessRole entity)
        {
            var query = @"DELETE FROM CompanyAccessRoles WHERE Id = @Id";
            Connection.Execute(query, param: new { Id = entity.Id }, transaction: Transaction);

        }

        public CompanyAccessRole Find(int id)
        {
            var query = @"SELECT * FROM CompanyAccessRoles WHERE Id = @Id";
            var role = Connection.QueryFirstOrDefault<CompanyAccessRole>(query, param: new { Id = id }, transaction: Transaction);
            if (role == null)
            {
                throw new System.Exception("No role with the id found.");
            }

            return role;
        }

        public void Update(CompanyAccessRole entity)
        {
            var query = @"UPDATE CompanyAccessRoles SET Name = @Name WHERE Id = @Id";
            var result = Connection.Execute(query,
               param: new { Name = entity.Name, Id = entity.Id },
               transaction: Transaction
           );

            if (result < 1)
            {
                throw new System.Exception("Unable to update company access level.");
            }
        }
    }
}
