using AutoMapper;
using Domain;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ShtetiFolder
{
	public class Edit
	{
		public class Command : IRequest
		{
			public Shteti Shteti { get; set; }
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
				//var shte = await _context.Shteti.FindAsync(request.Shteti.ShtetiId);

				//_mapper.Map(request.Shteti, shte);
				_context.Update(request.Shteti);
				await _context.SaveChangesAsync();
				return Unit.Value;
			}
		}
	}
}
