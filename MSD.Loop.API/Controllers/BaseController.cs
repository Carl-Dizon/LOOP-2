using MSD.Loop.Engine.Interfaces;
using System.Web.Http;

namespace MSD.Loop.API.Controllers
{
    public class BaseController : ApiController
    {
        public BaseController(IConfigurationFactory configurationFactory)
        {

        }
    }
}