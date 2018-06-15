using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProjectUser
    {
        public int Id { get; set; }
        public CompanyUser CompanyUser { get; set; }
        public CompanyProject Project { get; set; }
        public DateTime AssignedOn { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
