using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.MedikamentetFolder
{
    public class List
    {
        public class Query : IRequest<List<Medikamentet>> { }

        public class Handler : IRequestHandler<Query, List<Medikamentet>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Medikamentet>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Medicaments.ToListAsync();
            }
        }
    }
}
