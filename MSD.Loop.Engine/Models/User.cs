using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    /// <summary>
    /// Application User
    /// </summary>
    public class User
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }

        public bool IsVerified { get; set; }
        public string Password { get; set; }
        public int CreatedById { get; set; }

        public virtual List<Company> Companies { get; set; }

        //timestamps
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }

        public bool IsArchived { get; set; }
        public bool IsDefault { get; set; }
    }
}
