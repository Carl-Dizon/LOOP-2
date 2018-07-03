using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProjectArea
    {
        public int Id { get; set; }
        public CompanyArea Area { get; set; }
        public CompanyProject Project { get; set; }
    }
}
