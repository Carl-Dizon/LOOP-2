using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Models
{
    public class AccessLevel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        public bool IsArchived { get; set; }
    }
}
