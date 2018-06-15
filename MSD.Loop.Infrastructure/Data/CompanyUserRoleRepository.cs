﻿using MSD.Loop.Infrastructure.Interfaces;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class CompanyUserRoleRepository : BaseRepository, ICompanyUserRoleRepository
    {
        public CompanyUserRoleRepository(IDbTransaction transaction) : base(transaction)
        {
        }
    }
}
