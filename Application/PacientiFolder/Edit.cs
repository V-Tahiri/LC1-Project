using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.PacientiFolder
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Pacienti Pacienti {get; set;}
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
                //var pat = await _context.Patients.FindAsync(request.Pacienti.PacientiId);

                //_mapper.Map(request.Pacienti, pat);
                _context.Update(request.Pacienti);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}