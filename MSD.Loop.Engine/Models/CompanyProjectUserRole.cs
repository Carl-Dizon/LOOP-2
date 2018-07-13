using System;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProjectUserRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        //companyAcccessRole
        public int AccessRoleId { get; set; }

        //companyprojectuser
        public int ProjectMemberId { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
