using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Present_Clicker_Api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Presents { get; set; } = 0;
        public int ClickerLevel { get; set; } = 1;
        public int ClickerCost { get; set; } = 20;
        public DateTime LastSave { get; set; } = DateTime.UtcNow;

    }
}