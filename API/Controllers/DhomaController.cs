using Application.DhomaFolder;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{

	public class DhomaController : BaseAPIController
	{
		[HttpGet]
		public async Task<ActionResult<List<Dhoma>>> GetDhoma()
		{
			return await Mediator.Send(new List.Query());
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Dhoma>> GetDhoma(int id)


		{
			return await Mediator.Send(new Details.Query { Id = id });
		}

		[HttpPost]
		public async Task<IActionResult> CreateShteti(Dhoma dhom)
		{
			return Ok(await Mediator.Send(new Create.Command { Dhoma = dhom }));
		}

		[HttpPut]
		public async Task<IActionResult> EditShteti(Dhoma dhom)
		{
			
			return Ok(await Mediator.Send(new Edit.Command { Dhoma = dhom }));
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteShteti(int id)
		{
			return Ok(await Mediator.Send(request: new Delete.Command { Id = id }));
		}
	}
}