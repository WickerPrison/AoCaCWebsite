using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace AoCaCWebsite.Server.Models
{
    public class UserContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public UserContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<User> Users { get; set; }
    }
}
