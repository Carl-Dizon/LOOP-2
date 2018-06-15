using System;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProjectTaskUser
    {
        public int Id { get; set; }
        public CompanyUser Assignee { get; set; }
        public ProjectTask Task{ get; set; }
        public DateTime AssignedOn { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
