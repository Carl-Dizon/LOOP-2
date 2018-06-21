using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    /// <summary>
    /// Possibly for DEPRECATION
    /// </summary>
    public class CompanyRole
    {
        public int Id { get; set; }
        public Company Company { get; set; }

        public virtual List<CompanyUser> RoleAssignees { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

    }
}
