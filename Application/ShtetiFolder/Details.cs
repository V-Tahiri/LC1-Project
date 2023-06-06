using Domain;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ShtetiFolder
{
	public class Details
	{
		public class Query : IRequest<Shteti>
		{
			public int ShtetiId { get; set; }
		}

		public class Handler : IRequestHandler<Query, Shteti>
		{
			private readonly DataContext _context;

			public Handler(DataContext context)
			{
				_context = context;
			}

			public async Task<Shteti> Handle(Query request, CancellationToken cancellationToken)
			{
				return await _context.Shteti.FindAsync(request.ShtetiId);
			}
		}

	}
}

