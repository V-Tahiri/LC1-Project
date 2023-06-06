using AutoMapper;
using Domain;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.DhomaFolder
{
	public class Edit
	{
		public class Command : IRequest
		{
			public Dhoma Dhoma { get; set; }
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
				//var dhom = await _context.Dhoma.FindAsync(request.Dhoma.Id);

				//_mapper.Map(request.Dhoma, dhom);
				_context.Update(request.Dhoma);
				await _context.SaveChangesAsync();
				return Unit.Value;
			}
		}
	}
}
