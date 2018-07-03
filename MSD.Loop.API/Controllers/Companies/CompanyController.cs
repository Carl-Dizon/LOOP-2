using MSD.Loop.Business.Interfaces;
using MSD.Loop.DTO.Interfaces;
using System.Web.Http;
using MSD.Loop.Engine.Interfaces;

namespace MSD.Loop.API.Controllers.Companies
{
    public class CompanyController : BaseController
    {
        private readonly ICompanyService _companyService;
        private readonly ICompanyFactory _companyFactory;

        public CompanyController(IConfigurationFactory configurationFactory, 
            ICompanyService companyService, 
            ICompanyFactory companyFactory) : base(configurationFactory)
        {
            _companyService = companyService;
            _companyFactory = companyFactory;
        }

        public IHttpActionResult Get(int id)
        {
            var company = _companyService.Get(id);
            if (company == null)
            {
                return BadRequest("No company found..");
            }

            var companyDTO = _companyFactory.Create(company);
            return Ok(company.Name);
        }
    }
}