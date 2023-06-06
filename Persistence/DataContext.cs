using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
	public class DataContext : DbContext
	{
		public DataContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<Medikamentet> Medicaments { get; set; }

		public DbSet<Pacienti> Patients { get; set; }

		public DbSet<Shteti> Shteti { get; set; }

		public DbSet<Qyteti> Qyteti { get; set; }

		public DbSet<Reparti> Reparti { get; set; }

		public DbSet<Dhoma> Dhoma { get; set; }
	}
}
