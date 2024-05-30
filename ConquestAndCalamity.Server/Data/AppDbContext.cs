using Microsoft.EntityFrameworkCore;

namespace ConquestAndCalamity.Server.Data
{
    public class AppDbContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public AppDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(Configuration.GetConnectionString("RailwayConnectionString"));
        }

        public DbSet<User> User { get; set; }
    }
}
