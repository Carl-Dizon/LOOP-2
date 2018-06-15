using System.Data;

namespace MSD.Loop.Engine.Interfaces
{
    public interface IConnectionFactory
    {
        IDbConnection GetConnection();
    }
}
