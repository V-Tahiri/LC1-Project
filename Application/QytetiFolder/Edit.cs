using AutoMapper;
using Domain;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.QytetiFolder
{
	public class Edit
	{
		public class Command : IRequest
		{
			public Qyteti Qyteti { get; set; }
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
				//var qyt = await _context.Qyteti.FindAsync(request.Qyteti.QytetiId);

				//_mapper.Map(request.Qyteti, qyt);
				_context.Update(request.Qyteti);
				await _context.SaveChangesAsync();
				return Unit.Value;
			}
		}
	}
}
