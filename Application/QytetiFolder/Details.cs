using Domain;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.QytetiFolder
{
	public class Details
	{
		public class Query : IRequest<Qyteti>
		{
			public int QytetiId { get; set; }
		}

		public class Handler : IRequestHandler<Query, Qyteti>
		{
			private readonly DataContext _context;

			public Handler(DataContext context)
			{
				_context = context;
			}

			public async Task<Qyteti> Handle(Query request, CancellationToken cancellationToken)
			{
				return await _context.Qyteti.FindAsync(request.QytetiId);
			}
		}

	}
}


