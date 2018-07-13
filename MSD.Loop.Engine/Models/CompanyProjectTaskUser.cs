using System;

namespace MSD.Loop.Engine.Models
{
    /// <summary>
    /// Represents the Assigned user to a task
    /// </summary>
    public class CompanyProjectTaskUser
    {
        public int Id { get; set; }

        //companyprojectuser
        public int AssigneeId { get; set; }
        
        //projecttask
        public int ProjectTaskId { get; set; }

        //companyuser
        public int AssignedById { get; set; }
        
        public DateTime AssignedOn { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}
