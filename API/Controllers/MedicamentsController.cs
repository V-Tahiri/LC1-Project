using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.MedikamentetFolder;

namespace API.Controllers
{
    public class MedicamentsController : BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<List<Medikamentet>>> GetMedicaments()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Medikamentet>> GetMedikamentet(Guid id)
        {
            return await Mediator.Send(new Details.Query { MedikamentetId = id });
        } 

        [HttpPost]
        public async Task<IActionResult> CreateMedicament(Medikamentet med)
        {
            return Ok(await Mediator.Send(new Create.Command { Medikamentet = med }));
        }

        [HttpPut]
        public async Task<IActionResult> EditMedicament(Medikamentet med)
        {
            return Ok(await Mediator.Send(new Edit.Command { Medikamentet = med }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicament(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
