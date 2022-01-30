#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FullStackDemo.Models;

namespace FullStackDemo.Data
{
    public class FullStackDemoContext : DbContext
    {
        public FullStackDemoContext (DbContextOptions<FullStackDemoContext> options)
            : base(options)
        {
        }

        public DbSet<FullStackDemo.Models.Movie> Movie { get; set; }
    }
}
