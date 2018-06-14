using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProject
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public DateTime OriginalStartDate { get; set; }
        public DateTime OriginalEndDate { get; set; }

        //timestamps
        public DateTime DateCreated { get; set; }
        public DateTime LastModified { get; set; }
    }
}
