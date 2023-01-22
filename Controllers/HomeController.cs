using BookingSample.Models;
using ClosedXML.Excel;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Globalization;

namespace BookingSample.Controllers
{ 
    public class HomeController : Controller
    {
        
        
        private List<Stranka> stranke; 
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            
            
            _logger = logger;
            stranke = new List<Stranka>();
        }

        public IActionResult Index()
        {

            return View();
        }

        [HttpGet]
        public IActionResult BookTermin()
        {
            return View();
        }

        [HttpPost]
        public IActionResult BookTermin(string ImeInPriimek,DateTime DateTermina,int TimeTermina,string TipStoritve, int TelSt)
        {
            DateOnly datum = DateOnly.FromDateTime(DateTermina);
            int id = stranke.Count()+1;
            stranke.Add ( new Stranka { Id = id, ImeInPriimek=ImeInPriimek , DateTermina= datum ,TimeTermina=new TimeOnly(TimeTermina,0,0) ,TipStoritve = TipStoritve, TelSt = TelSt  });

            XLWorkbook workbook = new XLWorkbook("Bookings.xlsx");
            var ws = workbook.Worksheet("Bookings");
            var index = ws.RowsUsed().Count()+1;

            for(int i = 0;i < stranke.Count();i++)
            {
                
                ws.Cell("A" + index).Value = stranke[i].Id;
                ws.Cell("B" + index).Value = stranke[i].ImeInPriimek;
                ws.Cell("C" + index).Value = stranke[i].DateTermina.ToString();
                ws.Cell("D" + index).Value = stranke[i].TimeTermina.ToString();
                ws.Cell("E" + index).Value = stranke[i].TelSt;
                ws.Cell("F" + index).Value = stranke[i].TipStoritve;

            }
            workbook.SaveAs("Bookings.xlsx");

            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult ListBookings(List<Stranka>stranke)
        {
            return View(stranke);
        }



        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}