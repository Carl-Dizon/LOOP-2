using MSD.Loop.Common.Interfaces;
using MSD.Loop.Common.Modules;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IConfigurationFactory
    {
        IMailer GetMailer();
        ILogger GetLogger();
        IAuthenticationProvider GetAuthenticationManager();
        IRoleProvider GetRoleManager();
        ITokenProvider GetTokenManager();
        ApplicationEvents GetEvents();
        
    }
}
