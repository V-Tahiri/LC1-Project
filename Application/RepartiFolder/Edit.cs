using AutoMapper;
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
    public class Edit
    {
        public class Command : IRequest
        {
            public Reparti Reparti { get; set; }
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
                //var rep = await _context.Reparti.FindAsync(request.Reparti.RepartiId);

                //_mapper.Map(request.Reparti, rep);
                _context.Update(request.Reparti);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
