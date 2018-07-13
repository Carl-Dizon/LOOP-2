using MSD.Loop.Engine.Interfaces;
using System.Web.Http;

namespace MSD.Loop.API.Controllers.Access
{
    [RoutePrefix("api")]
    public class CompanyUserRoleController : ApiController
    {
        private readonly IRoleProvider _roleManager;
        public CompanyUserRoleController(IRoleProvider roleManager)
        {
            _roleManager = roleManager;
        }

        /// <summary>
        /// Retrieve's all the roles for a member/user of a company
        /// </summary>
        /// <returns></returns>
        [Route("user/{userId}/company/{companyId}/role")]
        public IHttpActionResult Get(int userId, int companyId)
        {
            return Ok();
        }

    }
}