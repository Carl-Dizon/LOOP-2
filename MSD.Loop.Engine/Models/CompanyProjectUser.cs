using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProjectUser
    {
        public int Id { get; set; }
        public CompanyProject Project { get; set; }
        public CompanyUser AssignedTo { get; set; }

        public DateTime AssignedOn { get; set; }
        public User AssignedBy { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
