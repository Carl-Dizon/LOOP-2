using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Models;

namespace MSD.Loop.DTO.Interfaces
{
    public interface IUserFactory
    {
        UserDTO Create(User user);
    }
}
