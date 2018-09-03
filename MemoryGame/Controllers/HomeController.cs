using MemoryGame.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MemoryGame.Controllers
{
    public class HomeController : Controller
    {
        ResultsContext context = new ResultsContext();
        public ActionResult Index()
        {
            return View();
        }
      
        [HttpPost]
        public ActionResult NewResult(Results std)
        {
            std.Date = DateTime.Now.ToString();
            context.Results.Add(std);
            context.SaveChanges();
            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });
        }
        public JsonResult GetTop5(string id)
        {
            List<Results> records = new List<Results>();
            records = context.Results.OrderBy(s => s.Number).Take(5).ToList();
            return Json(records, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetLastGame(string id)
        {
            List<Results> records = new List<Results>();
            records = context.Results.OrderByDescending(s => s.ResultsID).Take(5).ToList();
            return Json(records, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Policy()
        {
            return View();
        }
    }

  
}