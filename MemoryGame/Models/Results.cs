using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MemoryGame.Models
{
    public class Results
    {
        [Key]
        public int ResultsID { get; set; }
        [Required]
        public int Number { get; set; }
        [Required]
        public string Date { get; set; }
    }
}