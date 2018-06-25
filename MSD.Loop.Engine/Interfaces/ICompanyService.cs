using MSD.Loop.Engine.Models;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Interfaces
{
    public interface ICompanyService
    {
        IEnumerable<Company> GetAll();
        Company Get(int id);
    }
}
