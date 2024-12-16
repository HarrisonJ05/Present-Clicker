using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Present_Clicker_Api.Models
{
    public class LeaderboardDb : DbContext
    {
        public LeaderboardDb(DbContextOptions options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<FilteredUserType> FilteredUserTypes { get; set; }
        public DbSet<SaveRequest > SaveRequests { get; set; }
    }
}