using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Panda.Mobile.Web.Controllers
{
    public class DefaultController : Controller
    {
        //
        // GET: /Default/

        [HttpGet]
        public ActionResult Index()
        {
            return View("Index");
        }
    }
}
