using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace Present_Clicker_Api.Models;

public class LeaderboardFactory
{
    public static LeaderboardDb CreateDBContext(string connectionString, ILoggerFactory loggerFactory)
    {
        var optionsBuilder = new DbContextOptionsBuilder<LeaderboardDb>();
        optionsBuilder.UseSqlServer(connectionString).UseLoggerFactory(loggerFactory);
        return new LeaderboardDb(optionsBuilder.Options);
    }

    internal static object CreateDBContext(ILoggerFactory loggerFactory)
    {
        throw new NotImplementedException();
    }
}