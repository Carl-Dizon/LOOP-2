using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class CompanyProject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Company Company { get; set; }
        public CompanyUser CreatedBy { get; set; }
        public DateTime OriginalStartDate { get; set; }
        public DateTime OriginalEndDate { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }

        public bool IsArchived { get; set; }
    }
}
