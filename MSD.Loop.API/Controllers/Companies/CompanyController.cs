using MSD.Loop.Engine.Interfaces;
using System.Web.Http;

namespace MSD.Loop.API.Controllers.Companies
{
    public class CompanyController : BaseController
    {
        private readonly ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        public IHttpActionResult Get(int id)
        {
            var company = _companyService.Get(id);
            if (company == null)
            {
                return BadRequest("No company found..");
            }


            return Ok(company.Name);
        }
    }
}