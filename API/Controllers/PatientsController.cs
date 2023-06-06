using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.PacientiFolder;

namespace API.Controllers
{
    public class PatientsController : BaseAPIController
    {
        private readonly DataContext _context;
        public PatientsController(DataContext context){
            _context=context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Pacienti>>> GetPatients(){
            return await _context.Patients.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Pacienti>> GetPatient(Guid PacientiId){
            return await _context.Patients.FindAsync(PacientiId);
        }
         [HttpPost]
        public async Task<IActionResult> CreatePatient(Pacienti pat)
        {
            return Ok(await Mediator.Send(new Create.Command { Pacienti = pat }));
        }

        [HttpPut]
        public async Task<IActionResult> EditPatient(Pacienti pat)
        {
            return Ok(await Mediator.Send(new Edit.Command { Pacienti = pat }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatient(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
