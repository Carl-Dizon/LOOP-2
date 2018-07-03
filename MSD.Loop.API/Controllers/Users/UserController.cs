using MSD.Loop.Business.Interfaces;
using MSD.Loop.Engine.Interfaces;

namespace MSD.Loop.API.Controllers.Users
{
    public class UserController : BaseController
    {
        public UserController(IConfigurationFactory configurationFactory, IUserService userService) : base(configurationFactory)
        {
        }
    }
}