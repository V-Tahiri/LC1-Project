using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ShtetiFolder
{
	public class Delete
	{
		public class Command : IRequest
		{
			public int Id { get; set; }
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
				var shte = await _context.Shteti.FindAsync(request.Id);

				_context.Remove(shte);

				await _context.SaveChangesAsync();

				return Unit.Value;
			}
		}
	}
}
