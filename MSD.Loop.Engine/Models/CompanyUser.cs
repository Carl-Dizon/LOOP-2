using System;
using System.Collections.Generic;

namespace MSD.Loop.Engine.Models
{
    public class CompanyUser
    {
        public int Id { get; set; }
        public Company Company { get; set; }
        public User User { get; set; }
        public string Username { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }
    }
}
