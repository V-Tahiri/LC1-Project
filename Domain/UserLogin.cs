using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
	[Table("UserLogin")]
	public class UserLogin
	{
		[Key]
		public int Id { get; set; }

		public string Username { get; set; }

		public string Password { get; set; }



	}
}
