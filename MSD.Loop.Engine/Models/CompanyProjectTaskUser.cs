using System;

namespace MSD.Loop.Engine.Models
{
    /// <summary>
    /// Represents the Assigned user to a task
    /// </summary>
    public class CompanyProjectTaskUser
    {
        public int Id { get; set; }
        public CompanyProjectUser Assignee { get; set; }
        public ProjectTask ProjectTask{ get; set; }
        public User AssignedBy { get; set; }
        
        public DateTime AssignedOn { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
