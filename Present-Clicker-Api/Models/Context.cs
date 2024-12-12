using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Present_Clicker_Api.Models
{
    internal class LeaderboardDb : DbContext
    {
        public LeaderboardDb(DbContextOptions options) : base(options) { }
        public DbSet<User> Users { get; set; }

    }

    public static class LeaderboardFactory
    {
        public static LeaderboardDb CreateDbContext(ILoggerFactory loggerFactory)
        {
            var optionsBuilder = new DbContextOptionsBuilder<LeaderboardDb>();
            optionsBuilder.UseSqlServer(connectionstring);
            return new LeaderboardDb(optionsBuilder.Options);
        }
    }
}
