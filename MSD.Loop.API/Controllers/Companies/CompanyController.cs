using MSD.Loop.Business.Interfaces;
using MSD.Loop.Engine.Interfaces;
using System.Web.Http;

namespace MSD.Loop.API.Controllers.Companies
{
    [RoutePrefix("api")]
    public class CompanyController : BaseController
    {
        private readonly ICompanyService _companyService;
        private readonly IConfigurationFactory _configurationFactory;

        public CompanyController(IConfigurationFactory configurationFactory, 
            ICompanyService companyService) : base(configurationFactory)
        {
            _configurationFactory = configurationFactory;
            _companyService = companyService;
        }

        [Route("user/{userId}/company/{companyId}")]
        public IHttpActionResult Get(int userId, int companyId)
        {
            var companyDTOs = _companyService.GetCompanyAsMember(companyId, userId);
            if (companyDTOs == null)
            {
                return BadRequest($"No companies found..");
            }

            return Ok(companyDTOs);
        }

        [Route("user/{userId}/company")]
        public IHttpActionResult Get(int userId)
        {
            var companyDTOs = _companyService.GetCompaniesAsMember(userId);
            if (companyDTOs == null)
            {
                return BadRequest($"No companies found..");
            }

            return Ok(companyDTOs);
        }
    }
}