using Application.QytetiFolder;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{

	public class QytetiController : BaseAPIController
	{
		[HttpGet]
		public async Task<ActionResult<List<Qyteti>>> GetQyteti()
		{
			return await Mediator.Send(new List.Query());
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Qyteti>> GetQyteti(int id)


		{
			return await Mediator.Send(new Details.Query { QytetiId = id });
		}

		[HttpPost]
		public async Task<IActionResult> CreateQyteti(Qyteti qyt)
		{
			return Ok(await Mediator.Send(new Create.Command { Qyteti = qyt }));
		}

		[HttpPut]
		public async Task<IActionResult> EditQyteti(Qyteti qyt)
		{
			//qyt.QytetiId = id;
			return Ok(await Mediator.Send(new Edit.Command { Qyteti = qyt }));
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteQyteti(int id)
		{
			return Ok(await Mediator.Send(request: new Delete.Command { Id = id }));
		}
	}
}

