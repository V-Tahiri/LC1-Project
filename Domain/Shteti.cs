using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
	public partial class Shteti
	{
		public Shteti()
		{
			Qytetet = new HashSet<Qyteti>();

		}
		[Key]
		public int ShtetiId { get; set; }

		[StringLength(150)]
		[Required]
		public string Emri { get; set; }

		public virtual ICollection<Qyteti> Qytetet { get; set; }


	}
}
