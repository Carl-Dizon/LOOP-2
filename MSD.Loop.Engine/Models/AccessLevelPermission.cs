using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    public class AccessLevelPermission
    {
        public int Id { get; set; }
        public Permission Permission { get; set; }
        public AccessLevel AccessLevel { get; set; }
    }
}
