using System;

namespace MSD.Loop.Engine.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public bool IsVerified { get; set; }
        public string Password { get; set; }

        //public virtual List<Company> Companies { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }
    }
}
