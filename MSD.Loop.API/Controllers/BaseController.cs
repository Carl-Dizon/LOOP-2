using MSD.Loop.Common.Interfaces;
using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MSD.Loop.API.Controllers
{
    public class BaseController : ApiController
    {
        private readonly IAuthenticationProvider _authenticationProvider;

        public BaseController(IConfigurationFactory configurationFactory)
        {

        }
    }
}