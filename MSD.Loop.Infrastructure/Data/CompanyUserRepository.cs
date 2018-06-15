﻿using MSD.Loop.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyUserRepository : BaseRepository, ICompanyUserRepository
    {
        public CompanyUserRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
