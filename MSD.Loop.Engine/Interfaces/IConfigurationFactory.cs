using MSD.Loop.Common.Modules;
using MSD.Loop.Infrastructure.Interfaces;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IConfigurationFactory
    {
        IMailerProvider GetMailer();
        ILoggerProvider GetLogger();
        IAuthenticationProvider GetAuthenticationManager();
        IRoleProvider GetRoleManager();
        ITokenProvider GetTokenManager();
        ApplicationEvents GetEvents();
        
    }
}
