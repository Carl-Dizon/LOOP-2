﻿using System;

namespace MSD.Loop.Engine.Models
{
    public class RolePermission
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public CompanyRole CompanyRole { get; set; }

        //timestamp
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }

    }
}