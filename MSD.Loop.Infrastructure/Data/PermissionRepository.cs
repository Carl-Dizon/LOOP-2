using MSD.Loop.Engine.Interfaces;
using System.Data;
using MSD.Loop.Engine.Models;
using System.Collections.Generic;
using Dapper;

namespace MSD.Loop.Infrastructure.Data
{
    public class PermissionRepository : BaseRepository, IPermissionRepository
    {
        public PermissionRepository(IDbTransaction transaction) : base(transaction)
        {

        }

        public IEnumerable<Permission> All()
        {
            var query = @"SELECT * FROM Permissions";
            var results = Connection.Query<Permission>(query, transaction: Transaction);
            if (results == null)
            {
                throw new System.Exception("No permissions found.");
            }

            return results;
        }

        public Permission Create(Permission entity)
        {
            try
            {
                var query = @"INSERT INTO Permissions (Name, Description) VALUES(@Name, @Description); SELECT CAST(SCOPE_IDENTITY() as int)";
                var result = Connection.QuerySingle<int>(query, param: new { Name = entity.Name, Description = entity.Description }, transaction: Transaction);
                entity.Id = result;
                return entity;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception("Unable to add permission.");
            }
        }

        public void Delete(Permission entity)
        {
            var query = @"DELETE FROM Permissions WHERE Id = @Id";
            Connection.Execute(query, param: new { Id = entity.Id }, transaction: Transaction);
        }

        public Permission Find(int id)
        {
            var query = @"SELECT * FROM Permissions WHERE Id = @Id";
            var permission = Connection.QueryFirstOrDefault<Permission>(query, param: new { Id = id }, transaction: Transaction);
            if (permission == null)
            {
                throw new System.Exception("No permission with the id found.");
            }

            return permission;
        }

        public Permission FindByName(string name)
        {
            var query = @"SELECT * FROM Permissions WHERE Name = @Name";
            var permission = Connection.QueryFirstOrDefault<Permission>(query, param: new { Name = name }, transaction: Transaction);
            if (permission == null)
            {
                throw new System.Exception("No permission with the name found.");
            }

            return permission;
        }

        public void Update(Permission entity)
        {
            var query = @"UPDATE Permissions SET Name = @Name WHERE Id = @Id";
            var result = Connection.Execute(query,
               param: new { Name = entity.Name, Id = entity.Id },
               transaction: Transaction
           );

            if (result < 1)
            {
                throw new System.Exception("Unable to update permission.");
            }
        }
    }
}
