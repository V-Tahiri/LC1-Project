using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
	[Table("StaffLogin")]
	public class StaffLogin
	{
		[Key]
		public int Id { get; set; }

		public string Username { get; set; }

		public string Password { get; set; }



	}
}
