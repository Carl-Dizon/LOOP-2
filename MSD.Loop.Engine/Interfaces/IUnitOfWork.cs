using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        ICompanyRepository CompanyRepository { get; }
        IUserRepository UserRepository { get; }
        ICompanyAccessRoleRepository CompanyRoleRepository { get; }

        ICompanyUserRepository CompanyUserRepository { get; }
        ICompanyProjectUserRepository ProjectUserRepository { get; }
        ICompanyUserRoleRepository CompanyUserRoleRepository { get; }
        ICompanyProjectTaskUserRepository ProjectUserTaskRepository { get; }

        IProjectRepository ProjectRepository { get; }
        IProjectTaskRepository ProjectTaskRepository { get; }
        ICompanyMaterialStockRepository MaterialStockRepository { get; }
        IProjectTaskMaterialRepository ProjectMaterialRepository { get; }

        void Commit();
    }
}
