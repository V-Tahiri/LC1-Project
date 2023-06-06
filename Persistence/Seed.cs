using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            

            if (context.Shteti.Any()) return;

            var shteti = new List<Shteti>
            {
                new Shteti
                {
                    Emri="Kosova"
                },
                 new Shteti
                {
                     Emri="Zvicra"
                },
                  new Shteti
                {
                     Emri="Shqiperia"
                },
           
            };

            await context.Shteti.AddRangeAsync(shteti);
            await context.SaveChangesAsync();
        }

        
    }
}
