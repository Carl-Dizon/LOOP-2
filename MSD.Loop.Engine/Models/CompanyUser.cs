﻿using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    /// <summary>
    /// Application user that is assigned to a specific account/company
    /// </summary>
    public class CompanyUser
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }

        public bool IsRegistered { get; set; }
        public int CreatedById { get; set; }

        public virtual List<CompanyAccessRole> AssignedRoles { get; set; }
        public virtual List<CompanyProject> Projects { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

        public bool IsArchived { get; set; }
        public bool IsDefault { get; set; }
    }
}
