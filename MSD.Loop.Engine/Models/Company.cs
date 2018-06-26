using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string WebUrl { get; set; }

        public string LogoUrl { get; set; }
        public User CreatedByUser { get; set; }

        //public virtual List<CompanyRole> Roles { get; set; }
        //public virtual List<CompanyUser> Users { get; set; }
        //public virtual List<CompanyProject> Projects { get; set; }
        //public virtual List<CompanyMaterialStock> MaterialStocks { get; set; }
        //public virtual List<CompanyAccessRole> AccessRoles { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

        public bool IsArchived { get; set; }
        public bool IsDefault { get; set; }
    }
}
