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
    public class Create
    {
        public class Command : IRequest
        {
            public Medikamentet Medikamentet { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Medikamentet> entityEntry = _context.Medicaments.Add(request.Medikamentet);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
