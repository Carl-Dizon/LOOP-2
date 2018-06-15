﻿using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class ProjectTask
    {
        public int Id { get; set; }
        public CompanyProject Project { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }
    }
}
