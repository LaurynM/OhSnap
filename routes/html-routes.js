
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  app.get("/page2", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/page2.html"));
  });
  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/about.html"));
  });


};
