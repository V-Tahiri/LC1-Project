using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Reparti
    {
      
        public int RepartiId { get; set; }

        public string RepartiName { get; set; }

        public static implicit operator Reparti(Medikamentet v)
        {
            throw new NotImplementedException();
        }
    }
}
