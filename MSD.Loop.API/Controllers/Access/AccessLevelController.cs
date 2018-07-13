using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MSD.Loop.API.Controllers.Access
{
    public class AccessLevelController : ApiController
    {
        //private readonly 
        public AccessLevelController()
        {

        }

        public IHttpActionResult Get()
        {
            return Ok();
        }
    }
}