using MSD.Loop.DTO.Models;
using MSD.Loop.Engine.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IUserFactory
    {
        UserDTO Create(User user);
    }
}
