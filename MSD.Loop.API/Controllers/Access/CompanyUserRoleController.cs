using MSD.Loop.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MSD.Loop.API.Controllers.Access
{
    [RoutePrefix("api")]
    public class CompanyUserRoleController : ApiController
    {
        private readonly IRoleService _roleService;
        public CompanyUserRoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }

        /// <summary>
        /// Retrieve's all the roles for a member/user of a company
        /// </summary>
        /// <returns></returns>
        [Route("user/{userId}/company/{companyId}/role")]
        public IHttpActionResult Get(int userId, int companyId)
        {
            var test = _roleService.InitializeDatabase();
            return Ok();
        }

    }
}