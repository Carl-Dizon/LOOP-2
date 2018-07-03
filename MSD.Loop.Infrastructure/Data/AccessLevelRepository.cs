using System.Collections.Generic;
using System.Data;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;
using Dapper;

namespace MSD.Loop.Infrastructure.Data
{
    public class AccessLevelRepository : BaseRepository, IAccessLevelRepository
    {
        public AccessLevelRepository(IDbTransaction transaction) : base(transaction)
        {

        }

        public IEnumerable<AccessLevel> All()
        {
            var query = @"SELECT * FROM AccessLevels";
            var results = Connection.Query<AccessLevel>(query, transaction: Transaction);
            if (results == null)
            {
                throw new System.Exception("No access levels found.");
            }

            return results;
        }

        public AccessLevel Create(AccessLevel entity)
        {
            try
            {
                var query = @"INSERT INTO AccessLevels (Name) VALUES(@Name); SELECT CAST(SCOPE_IDENTITY() as int)";
                var result = Connection.QuerySingle<int>(query, param: new { Name = entity.Name }, transaction: Transaction);
                entity.Id = result;
                return entity;
            }
            catch (System.Exception)
            {
                throw new System.Exception("Unable to add access level.");
            };
        }

        public void Delete(AccessLevel entity)
        {
            var query = @"DELETE FROM AccessLevels WHERE Id = @Id";
            Connection.Execute(query, param: new { Id = entity.Id }, transaction: Transaction);
        }

        public AccessLevel Find(int id)
        {
            var query = @"SELECT * FROM AccessLevels WHERE Id = @Id";
            var accessLevel = Connection.QueryFirstOrDefault<AccessLevel>(query, param: new { Id = id }, transaction: Transaction);
            if (accessLevel == null)
            {
                throw new System.Exception("No accesslevel with the id found.");
            }

            return accessLevel;
        }

        public AccessLevel FindByName(string name)
        {
            var query = @"SELECT * FROM AccessLevels WHERE Name = @Name";
            var accesslevel = Connection.QueryFirstOrDefault<AccessLevel>(query, param: new { Name = name }, transaction: Transaction);
            if (accesslevel == null)
            {
                throw new System.Exception("No accesslevel with the name found.");
            }

            return accesslevel;
        }

        public void Update(AccessLevel entity)
        {
            var query = @"UPDATE AccessLevels SET Name = @Name WHERE Id = @Id";
            var result = Connection.Execute(query,
               param: new { Name = entity.Name, Id = entity.Id },
               transaction: Transaction
           );

            if (result < 1)
            {
                throw new System.Exception("Unable to update accesslevel.");
            }
        }
    }
}
