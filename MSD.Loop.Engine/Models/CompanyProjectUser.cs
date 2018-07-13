using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProjectUser
    {
        public int Id { get; set; }

        //companyproject
        public int ProjectId { get; set; }

        //companyuser
        public int AssignedToId { get; set; }

        //companyuser
        public int AssignedById { get; set; }

        public DateTime AssignedOn { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
