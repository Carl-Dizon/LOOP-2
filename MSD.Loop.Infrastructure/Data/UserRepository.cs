using MSD.Loop.Infrastructure.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
