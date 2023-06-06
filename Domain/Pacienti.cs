using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Pacienti
    {
        public Guid PacientiId { get; set; }

        public string Emri { get; set; }

        public string Mbiemri { get; set; }

        public string Email { get; set; }

        public char Gjinia { get; set; }

        public DateTime Datelindja { get; set; }

        public int Mosha { get; set; }

        public string Shteti { get; set; }

        public string Qyteti { get; set; }

        public string Adresa { get; set; }

        public string Medikamentet { get; set; }
    }
}
