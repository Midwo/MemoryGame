using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MemoryGame.Models
{
    public class ResultsContext : DbContext
    {
        public DbSet<Results> Results { get; set; }
    }
}