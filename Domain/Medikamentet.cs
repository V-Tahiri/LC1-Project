using System;

namespace Domain
{
    public class Medikamentet
    {
        public Guid MedikamentetId { get; set; }

        public string RecetaMjekesore { get; set; }

        public string Emri { get; set; }

        public int Doza { get; set; }
        
    }
}
