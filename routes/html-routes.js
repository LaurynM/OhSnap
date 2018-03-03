
// Dependencies
// =============================================================
var path = require("path");


var isAuth = require("../helpers/isAuth");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
<<<<<<< HEAD
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
=======
  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
    // page2 route loads page2.html
>>>>>>> c5f68d6b902817b751e724fa6fb88f27ba706dba
  app.get("/page2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page2.html"));
  });

  // print.js route loads PDFs
  app.get('/print.js*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/print.js"));
  });

  // pdf.js route loads PDFs
  app.get('/pdf.js*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/pdf.js"));
  });


};
