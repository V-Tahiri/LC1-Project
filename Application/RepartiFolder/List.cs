using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.RepartiFolder
{
    public class List
    {
        public class Query : IRequest<List<Reparti>> { }

        public class Handler : IRequestHandler<Query, List<Reparti>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Reparti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Reparti.ToListAsync();
            }
        }
    }
}