
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
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
  app.get("/page2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page2.html"));
  });

};

//IN PROGRESS
module.exports = function(app) {
  //WANT TO SEE IF USER IS LOGGED IN. IF SO, JUST HAVE THEM REDIR TO PAGE2
  app.get("/", function (req, res) {
    console.log("User is KNOWN to us. ");
    if (req.user) {
        res.redirect("/page2.html");
    }
    console.log("User is UNKNOWN to us. ");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //WANT TO SEE IF USER IS IN DB. AS IN AUTHENTICATED. USING M/W OF isAuth
  app.get("/", isAuth, function (req, res) {
    //isAuth is helper m/w that returns next()if auth but redirs if not
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
