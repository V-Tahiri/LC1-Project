using AutoMapper;
using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.MedikamentetFolder
{
    public class Edit
    {
     public class Command : IRequest
        {
            public Medikamentet Medikamentet { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly IMapper _mapper;
            private readonly DataContext _context;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                 //var med = await _context.Medicaments.FindAsync(request.Medikamentet.MedikamentetId);

                //_mapper.Map(request.Medikamentet, med);
                _context.Update(request.Medikamentet);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
