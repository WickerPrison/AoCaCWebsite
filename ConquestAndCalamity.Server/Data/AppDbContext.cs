using Microsoft.EntityFrameworkCore;

namespace ConquestAndCalamity.Server.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> User { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
