using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    public class ProjectTaskWorkHourEstimate
    {
        public int Id { get; set; }
        public TimeSpan Duration { get; set; }
        public ProjectTask ProjectTask { get; set; }
        public CompanyProjectTaskUser EstimatedBy { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

        public bool IsArchived { get; set; }
    }
}
