using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Present_Clicker_Api.DTO
{
    public class SaveRequest
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int Presents { get; set; }
        public int ClickerLevel { get; set; }
    }
}
