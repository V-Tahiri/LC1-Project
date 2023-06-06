using Domain;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.DhomaFolder
{
	public class Details
	{
		public class Query : IRequest<Dhoma>
		{
			public int Id { get; set; }
		}

		public class Handler : IRequestHandler<Query, Dhoma>
		{
			private readonly DataContext _context;

			public Handler(DataContext context)
			{
				_context = context;
			}

			public async Task<Dhoma> Handle(Query request, CancellationToken cancellationToken)
			{
				return await _context.Dhoma.FindAsync(request.Id);
			}
		}

	}
}
