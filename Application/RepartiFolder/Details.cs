using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.RepartiFolder
{
    public class Details
    {
        public class Query : IRequest<Reparti>
        {
            public int RepartiId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Reparti>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Reparti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Reparti.FindAsync(request.RepartiId);
            }
        }

    }
}
