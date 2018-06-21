﻿using MSD.Loop.Engine.Interfaces;
using System;
using System.Data;

namespace MSD.Loop.Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private IDbConnection _connection;
        private IDbTransaction _transaction;
        private bool _disposed;

        private readonly ICompanyRepository _companyRepo;
        private readonly IUserRepository _userRepo;
        private readonly ICompanyAccessRoleRepository _companyRoleRepo;
        private readonly ICompanyUserRepository _companyUserRepo;

        private readonly ICompanyProjectUserRepository _projectUserRepo;
        private readonly ICompanyUserRoleRepository _companyUserRoleRepo;
        private readonly ICompanyProjectTaskUserRepository _projectUserTaskRepo;
        private readonly IProjectRepository _projectRepo;

        private readonly IProjectTaskRepository _projectTaskRepo;
        private readonly ICompanyMaterialStockRepository _materialStockRepo;
        private readonly ProjectMaterialRepository _projectMaterialRepo;

        public UnitOfWork(IConnectionFactory connectionFactory)
        {
            _connection = connectionFactory.GetConnection();
            _transaction = _connection.BeginTransaction();
        }

        public ICompanyRepository CompanyRepository
        {
            get { return _companyRepo ?? (new CompanyRepository(_transaction)); }
        }

        public IUserRepository UserRepository
        {
            get { return _userRepo ?? (new UserRepository(_transaction)); }
        }

        public ICompanyAccessRoleRepository CompanyRoleRepo
        {
            get { return _companyRoleRepo ?? (new CompanyAccessRoleRepository(_transaction)); }
        }

        public ICompanyUserRepository CompanyUserRepository
        {
            get { return _companyUserRepo ?? (new CompanyUserRepository(_transaction)); }
        }

        public ICompanyProjectUserRepository ProjectUserRepository
        {
            get { return _projectUserRepo ?? (new ProjectUserRepository(_transaction)); }
        }

        public ICompanyUserRoleRepository CompanyUserRoleRepository
        {
            get { return _companyUserRoleRepo ?? (new CompanyUserRoleRepository(_transaction)); }
        }

        public ICompanyProjectTaskUserRepository ProjectUserTaskRepository
        {
            get { return _projectUserTaskRepo ?? (new ProjectTaskUserRepository(_transaction)); }
        }

        public IProjectRepository ProjectRepository
        {
            get { return _projectRepo ?? (new CompanyProjectRepository(_transaction)); }
        }

        public IProjectTaskRepository ProjectTaskRepository
        {
            get { return _projectTaskRepo ?? (new ProjectTaskRepository(_transaction)); }
        }

        public ICompanyMaterialStockRepository MaterialStockRepository
        {
            get { return _materialStockRepo ?? (new CompanyMaterialStockRepository(_transaction)); }
        }

        public IProjectTaskMaterialRepository ProjectMaterialRepository
        {
            get { return _projectMaterialRepo ?? (new ProjectMaterialRepository(_transaction)); }
        }

        public ICompanyAccessRoleRepository CompanyRoleRepository
        {
            get { return _companyRoleRepo ?? (new CompanyAccessRoleRepository(_transaction)); }
        }
        //TODO: more to be added here as we go along
        //ADD them here as needed


        public void Commit()
        {
            try
            {
                _transaction.Commit();
            }
            catch
            {
                _transaction.Rollback();
                throw;
            }
            finally
            {
                _transaction.Dispose();
                _transaction = _connection.BeginTransaction();
                //resetRepositories();
            }
        }

        public void Dispose()
        {
            DisposeThis(true);
            GC.SuppressFinalize(this);
        }

        private void DisposeThis(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    if (_transaction != null)
                    {
                        _transaction.Dispose();
                        _transaction = null;
                    }
                    if (_connection != null)
                    {
                        _connection.Dispose();
                        _connection = null;
                    }
                }
                _disposed = true;
            }
        }
    }
}
