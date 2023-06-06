using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.PacientiFolder
{
    public class List
    {
        public class Query : IRequest<List<Pacienti>> { }

        public class Handler : IRequestHandler<Query, List<Pacienti>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Pacienti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Patients.Include(patient => patient.Medikamentet).ToListAsync();
            }
        }
    }
}
