using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
using Application;
using Application.RepartiFolder;

namespace API.Controllers
{

    public class RepartiController : BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<List<Reparti>>> GetReparti()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Reparti>> GetReparti(int id)
        {
            return await Mediator.Send(new Details.Query { RepartiId = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateReparti(Reparti rep)
        {
            return Ok(await Mediator.Send(new Create.Command { Reparti = rep }));
        }

        [HttpPut]
        public async Task<IActionResult> EditReparti(Reparti rep)
        {
           
            return Ok(await Mediator.Send(new Edit.Command { Reparti = rep }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReparti(Guid id)
        {
            return Ok(await Mediator.Send(request: new Delete.Command { Id = id }));
        }
    }
}