﻿using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class ProjectTask
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        //companyproject
        public int ProjectId { get; set; }

        //companyprojectuser
        public int CreatedById { get; set; }
        public TimeSpan Duration { get; set; }

        public virtual List<CompanyProjectTaskUser> Assignees { get; set; }
        public virtual List<ProjectTaskWorkHourEstimate> LoggedHours { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

        public bool IsArchived { get; set; }
    }
}
