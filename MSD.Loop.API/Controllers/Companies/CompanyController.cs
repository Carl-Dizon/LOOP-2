using MSD.Loop.DTOs.Interfaces;
using MSD.Loop.Engine.Interfaces;
using System.Web.Http;

namespace MSD.Loop.API.Controllers.Companies
{
    public class CompanyController : BaseController
    {
        private readonly ICompanyService _companyService;
        private readonly ICompanyFactory _companyFactory;
        public CompanyController(ICompanyService companyService, ICompanyFactory companyFactory)
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
            return Ok(_companyService.Get(id).Name);
        }
    }
}