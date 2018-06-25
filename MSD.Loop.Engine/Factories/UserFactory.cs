using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.Engine.Factories
{
    public class UserFactory : IUserFactory
    {
        public UserDTO Create(User user)
        {
            return new UserDTO();
        }
    }
}
