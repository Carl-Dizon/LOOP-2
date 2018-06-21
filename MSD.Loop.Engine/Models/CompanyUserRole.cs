﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    /// <summary>
    /// The role assigned to a user in a company or account
    /// </summary>
    public class CompanyUserRole
    {
        public int Id { get; set; }
        public CompanyUser User { get; set; }
        public CompanyAccessRole Role { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

        public bool IsArchived { get; set; }
    }
}
