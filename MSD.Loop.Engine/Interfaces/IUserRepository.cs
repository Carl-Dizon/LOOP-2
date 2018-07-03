using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> All();
        User Find(int id);
        User FindByName(string name);
        User Create(User entity);
        void Update(User entity);
        void Delete(User entity);
    }
}
