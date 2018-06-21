using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    /// <summary>
    /// Application user that is assigned to a specific account/company
    /// </summary>
    public class CompanyUser
    {
        public int Id { get; set; }
        public Company Company { get; set; }
        public User User { get; set; }
        public string Username { get; set; }

        public bool IsRegistered { get; set; }
        public User CreatedBy { get; set; }

        public virtual List<CompanyRole> AssignedRoles { get; set; }
        public virtual List<CompanyProject> Projects { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

        public bool IsArchived { get; set; }
    }
}
