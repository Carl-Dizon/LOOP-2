using System.Data;

namespace MSD.Loop.Infrastructure.Interfaces
{
    public interface IConnectionFactory
    {
        IDbConnection GetConnection();
    }
}
