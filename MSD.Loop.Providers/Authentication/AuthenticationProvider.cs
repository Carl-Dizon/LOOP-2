using MSD.Loop.Common.Interfaces;
using MSD.Loop.Engine.Interfaces;
using System.IdentityModel.Tokens;
using System.Security.Claims;

namespace MSD.Loop.Providers.Authentication
{
    public class AuthenticationProvider : IAuthenticationProvider
    {
        private readonly IUnitOfWork _uow;
        public AuthenticationProvider(IUnitOfWork uow)
        {
            _uow = uow;
        }
    }
}
