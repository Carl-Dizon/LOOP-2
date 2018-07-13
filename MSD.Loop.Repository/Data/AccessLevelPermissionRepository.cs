using MSD.Loop.Engine.Interfaces;
using System.Data;
using MSD.Loop.Engine.Models;
using System.Collections.Generic;
using Dapper;

namespace MSD.Loop.Repository.Data
{
    public class AccessLevelPermissionRepository : BaseRepository, IAccessLevelPermissionRepository
    {
        public AccessLevelPermissionRepository(IDbTransaction transaction) : base(transaction)
        {
        }

        public IEnumerable<AccessLevelPermission> All()
        {
            var query = @"SELECT * FROM AccessLevelPermissions";
            var results = Connection.Query<AccessLevelPermission>(query, transaction: Transaction);
            if (results == null)
            {
                throw new System.Exception("No accesslevelpermissions found.");
            }

            return results;
        }

        public AccessLevelPermission Create(AccessLevelPermission entity)
        {
            try
            {
                var query = @"INSERT INTO AccessLevelPermissions (PermissionId, AccessLevelId, AccessLevelKey) 
                              VALUES(@PermissionId, @AccessLevelId, @AccessLevelKey);  
                              SELECT CAST(SCOPE_IDENTITY() as int)";

                var result = Connection.QuerySingle<int>(query, 
                    param: new
                    {
                        PermissionId = entity.PermissionId,
                        AccessLevelId = entity.AccessLevelId,
                        AccessLevelKey = entity.AccessLevelKey

                    }, transaction: Transaction);

                entity.Id = result;
                return entity;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception("Unable to add access level permission.");
            }
        }

        public void Delete(AccessLevelPermission entity)
        {
            var query = @"DELETE FROM AccessLevelPermissions 
                        WHERE Id = @Id";

            Connection.Execute(query, param: new { Id = entity.Id }, transaction: Transaction);
        }

        public AccessLevelPermission Find(int id)
        {
            var query = @"SELECT * FROM AccessLevelPermissions 
                          WHERE Id = @Id";

            var permission = Connection.QueryFirstOrDefault<AccessLevelPermission>(query, 
                param: new
                {
                    Id = id
                }, transaction: Transaction);

            if (permission == null)
            {
                throw new System.Exception("No accesslevel permission with the id found.");
            }

            return permission;
        }

        public void Update(AccessLevelPermission entity)
        {
            var query = @"UPDATE AccessLevelPermissions 
                          SET Name = @Name 
                          WHERE Id = @Id";

            var result = Connection.Execute(query,
                param: new
                {
                    PermissionId = entity.PermissionId,
                    AccessLevelId = entity.AccessLevelId
                },
                transaction: Transaction
           );

            if (result < 1)
            {
                throw new System.Exception("Unable to update access level permission.");
            }
        }
    }
}
