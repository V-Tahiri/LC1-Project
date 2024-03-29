﻿using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

    namespace Application.DhomaFolder
{
    public class Create
    {
        public class Command : IRequest
        {
            public Dhoma Dhoma { get; set; }
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
                Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Dhoma> entityEntry = _context.Dhoma.Add(request.Dhoma);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }


        }
    }
}