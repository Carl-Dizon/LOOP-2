using MSD.Loop.DTO.Interfaces;
using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.Business.Factories
{
    public class UserFactory : IUserFactory
    {
        public UserDTO Create(User user)
        {
            return new UserDTO();
        }
    }
}
