using System;

namespace MSD.Loop.Engine.Models
{
    public class ProjectTaskMaterial
    {
        public int Id { get; set; }
        public ProjectTask ProjectTask { get; set; }
        public CompanyMaterialStock MaterialStock { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }
    }
}
