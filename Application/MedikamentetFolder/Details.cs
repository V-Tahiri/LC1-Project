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
    public class Details
    {
        public class Query : IRequest<Medikamentet>
        {
            public Guid MedikamentetId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Medikamentet>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Medikamentet> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Medicaments.FindAsync(request.MedikamentetId);
            }
        }

    }
}
