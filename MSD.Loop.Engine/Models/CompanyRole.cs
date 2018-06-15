using System;

namespace MSD.Loop.Engine.Models
{
    public class CompanyRole
    {
        public int Id { get; set; }
        public Company Company { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

    }
}
