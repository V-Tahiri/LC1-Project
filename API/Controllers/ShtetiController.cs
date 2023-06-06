using Application.ShtetiFolder;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{

	public class ShtetiController : BaseAPIController
	{
		[HttpGet]
		public async Task<ActionResult<List<Shteti>>> GetShteti()
		{
			return await Mediator.Send(new List.Query());
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Shteti>> GetShteti(int id)


		{
			return await Mediator.Send(new Details.Query { ShtetiId = id });
		}

		[HttpPost]
		public async Task<IActionResult> CreateShteti(Shteti shte)
		{
			return Ok(await Mediator.Send(new Create.Command { Shteti = shte }));
		}

		[HttpPut]
		public async Task<IActionResult> EditShteti(Shteti shte)
		{
			//shte.ShtetiId = id;
			return Ok(await Mediator.Send(new Edit.Command { Shteti = shte }));
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteShteti(int id)
		{
			return Ok(await Mediator.Send(request: new Delete.Command { Id = id }));
		}
	}
}
