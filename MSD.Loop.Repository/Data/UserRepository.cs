using Dapper;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;
using System.Collections.Generic;
using System.Data;

namespace MSD.Loop.Repository.Data
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IDbTransaction transaction) : base(transaction)
        {
        }

        public IEnumerable<User> All()
        {
            var query = @"SELECT * FROM Users";
            var results = Connection.Query<User>(query, transaction: Transaction);
            if (results == null)
            {
                throw new System.Exception("No users found.");
            }

            return results;
        }

        public User Create(User entity)
        {
            try
            {
                //TODO: hashing and salting algorithm utility here
                var hashedAndSaltedPassword = entity.Password;
                var query = @"INSERT INTO Users (Firstname, Lastname, Email, Password, IsVerified, IsDefault, CreatedById, CreatedOn, LastModifiedOn) 
                            VALUES(@Firstname, @Lastname, @Email, @Password, @IsVerified, @IsDefault, @CreatedById, @CreatedOn, @LastModifiedOn);
                            SELECT CAST(SCOPE_IDENTITY() as int)";
                var result = Connection.QuerySingle<int>(query, param: new
                {
                    Firstname = entity.Firstname,
                    Lastname = entity.Lastname,
                    Email = entity.Email,
                    Password = hashedAndSaltedPassword,
                    IsVerified = entity.IsVerified,
                    IsDefault = entity.IsDefault,
                    CreatedById = entity.CreatedById,
                    CreatedOn = entity.CreatedOn,
                    LastModifiedOn = entity.LastModifiedOn

                }, transaction: Transaction);

                entity.Id = result;
                return entity;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception("Unable to add user.");
            }
        }

        public void Delete(User entity)
        {
            var query = @"DELETE FROM Users WHERE Id = @Id";
            Connection.Execute(query, param: new { Id = entity.Id }, transaction: Transaction);
        }

        public User Find(int id)
        {
            var query = @"SELECT * FROM Users WHERE Id = @Id";
            var user = Connection.QueryFirstOrDefault<User>(query, param: new { Id = id }, transaction: Transaction);
            if (user == null)
            {
                throw new System.Exception("No user with the id found.");
            }

            return user;
        }

        public User FindByName(string name)
        {
            var query = @"SELECT * FROM Permissions WHERE Firstname = @Name OR Lastname = @Name";
            var user = Connection.QueryFirstOrDefault<User>(query, param: new { Name = name }, transaction: Transaction);
            if (user == null)
            {
                throw new System.Exception("No user with the name found.");
            }

            return user;
        }

        public void Update(User entity)
        {
            //TODO: hashing and salting algorithm utility here
            var hashedAndSaltedPassword = entity.Password;
            var query = @"UPDATE Users SET 
                        Firstname = @Firstname,  
                        Lastname = @Lastname,
                        Email = @Email,
                        Password = @Password,
                        IsVerified = @IsVerified,
                        IsDefault = @IsDefault,
                        LastModifiedOn = @LastModifiedOn 
                        WHERE Id = @Id";

            var result = Connection.Execute(query,
               param: new
               {
                   Firstname = entity.Firstname,
                   Lastname = entity.Lastname,
                   Email = entity.Email,
                   Password = hashedAndSaltedPassword,
                   IsVerified = entity.IsVerified,
                   LastModifiedOn = entity.LastModifiedOn,
                   Id = entity.Id
               },
               transaction: Transaction
           );

            if (result < 1)
            {
                throw new System.Exception("Unable to update user.");
            }
        }
    }
}
