using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {

        IApplicationSettingRepository ApplicationSettingRepo { get; }
        IPermissionRepository PermissionRepo { get; }
        IAccessLevelRepository AccessLevelRepo { get; }
        IAccessLevelPermissionRepository AccessLevelPermissionRepo { get; }

        ICompanyRepository CompanyRepository { get; }
        IUserRepository UserRepository { get; }
        ICompanyAccessRoleRepository CompanyAccessRoleRepository { get; }

        ICompanyUserRepository CompanyUserRepository { get; }
        ICompanyProjectUserRepository ProjectUserRepository { get; }
        ICompanyUserRoleRepository CompanyUserRoleRepository { get; }
        ICompanyProjectTaskUserRepository ProjectUserTaskRepository { get; }

        ICompanyProjectRepository ProjectRepository { get; }
        IProjectTaskRepository ProjectTaskRepository { get; }
        ICompanyMaterialStockRepository MaterialStockRepository { get; }
        IProjectTaskMaterialRepository ProjectMaterialRepository { get; }

        void Commit();
    }
}
