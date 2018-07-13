using MSD.Loop.Business.Interfaces;
using MSD.Loop.Engine.Interfaces;

namespace MSD.Loop.API.Controllers.Users
{
    public class UserController : BaseController
    {
        private readonly IUserService _userService;
        public UserController(IConfigurationFactory configurationFactory,
            IUserService userService) 
            : base(configurationFactory)
        {
            _userService = userService;
        }
    }
}