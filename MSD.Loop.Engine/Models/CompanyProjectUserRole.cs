using System;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProjectUserRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public CompanyAccessRole AccessRole { get; set; }
        public CompanyProjectUser ProjectMember { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
