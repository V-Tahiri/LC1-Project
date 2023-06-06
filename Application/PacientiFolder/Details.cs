using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.PacientiFolder
{
    public class Details
    {
        public class Query : IRequest<Pacienti>
        {
            public Guid PacientiId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Pacienti>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Pacienti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Patients.FindAsync(request.PacientiId);
            }
        }

    }
}