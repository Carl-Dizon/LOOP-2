using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
       
        public virtual List<CompanyProject> Projects { get; set; }
        public virtual List<Company> Companies { get; set; }
        public virtual List<CompanyRole> CompanyRoles { get; set; }
        public virtual List<ProjectAssignedUserRole> ProjectRoles { get; set; }

        //timestamps
        public DateTime DateCreated { get; set; }
        public DateTime LastModified { get; set; }
    }
}
