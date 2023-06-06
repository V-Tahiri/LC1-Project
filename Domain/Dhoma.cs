using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain

{
    public class Dhoma
    {

        public int Id { get; set; }

        public string Kati { get; set; }

        public string Lloji { get; set; }

        public int NrPacienteve { get; set; }

        public int RepartiId { get; set; }

        public Reparti Reparti { get; set; }
      
    }
}
