using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.QytetiFolder
{
	public class List
	{
		public class Query : IRequest<List<Qyteti>> { }

		public class Handler : IRequestHandler<Query, List<Qyteti>>
		{
			private readonly DataContext _context;

			public Handler(DataContext context)
			{
				_context = context;
			}
			public async Task<List<Qyteti>> Handle(Query request, CancellationToken cancellationToken)
			{
				return await _context.Qyteti.Include(qyteti => qyteti.Shteti).ToListAsync();
			}
		}
	}
}

