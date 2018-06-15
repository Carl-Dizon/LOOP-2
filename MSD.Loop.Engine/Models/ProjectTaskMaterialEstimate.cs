using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    public class ProjectTaskMaterialEstimate
    {
        public int Id { get; set; }
        public ProjectTask Task { get; set; }
        public CompanyProjectTaskUser Assignee { get; set; }

        public float Estimate { get; set; }
        public float RemainingEstimate { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

    }
}
