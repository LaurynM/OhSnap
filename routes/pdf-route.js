// Dependencies
// =============================================================

var PDFDocument = require("pdfkit");
var blobStream  = require("blob-stream");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/pdf", function(req, res) {
    var doc = new PDFDocument();
    var stream = doc.pipe(blobStream());
    // draw some text
    doc.text('Recipe Title' + req.body.title)
    // end document                                     
    doc.end();
    doc.pipe(res)
  });
};
