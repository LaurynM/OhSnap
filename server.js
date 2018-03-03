
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var PDFDocument = require("pdfkit");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/userAPI-routes.js")(app);
require("./routes/pantryAPI-routes.js")(app);
require("./routes/pdf-route.js")(app);
// app.listen(PORT, function(){
//   console.log("Oh Snap App Listening on PORT "+PORT);
// })

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Oh Snap App listening on PORT "+PORT);
  });
});
