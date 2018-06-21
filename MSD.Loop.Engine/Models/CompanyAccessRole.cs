using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class CompanyAccessRole
    {
        public int Id { get; set; }
        public Company Company { get; set; }
        public AccessLevel AccessLevel { get; set; }
        public string  Name { get; set; }

        public virtual List<CompanyUser> RoleAssignees { get; set; }
        public string Description { get; set; }

        public bool IsArchived { get; set; }
    }
}
