using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    public class DefaultUser : User
    {
        public DefaultUser()
        {
            Firstname = "Default";
            Lastname = "Default";
            Email = "default@company.com";
            IsDefault = true;
            IsVerified = true;
            IsArchived = false;
            
        }
    }
}
