using Domain;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.QytetiFolder
{
	public class Create
	{
		public class Command : IRequest
		{
			public Qyteti Qyteti { get; set; }
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
				Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Qyteti> entityEntry = _context.Qyteti.Add(request.Qyteti);

				await _context.SaveChangesAsync();

				return Unit.Value;
			}


		}
	}
}
