using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{

	public class Qyteti
	{
		public Qyteti()
		{

		}

		[Key]
		public int QytetiId { get; set; }

		[StringLength(150)]
		[Required]
		public string Emri { get; set; }

		[StringLength(50)]
		[Required]
		public string ZipKodi { get; set; }

		[ForeignKey("Shteti")]
		public int ShtetiId { get; set; }

		public Shteti Shteti { get; set; }


	}
}
