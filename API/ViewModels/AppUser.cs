namespace MedTech.eHospital.Api.ViewModels
{
	public class AppUser
	{
		public string Username { get; set; }
		public int UserId { get; set; }

		public string Role { get; set; }

		public bool IsLoggedIn
		{
			get
			{
				return UserId > 0;
			}
		}
	}
}
