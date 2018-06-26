﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Common.Interfaces
{
    public interface IRoleProvider
    {
        void Initialize(IDbConnection connection);
    }
}
