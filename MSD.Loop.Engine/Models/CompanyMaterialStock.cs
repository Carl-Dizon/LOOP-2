using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class CompanyMaterialStock
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Company Company { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
