// Dependencies
// =============================================================

var PDFDocument = require("pdfkit");
var blobStream  = require("blob-stream");
var browserify  = require("browserify");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/pdf", function(req, res) {
    var doc = new PDFDocument();
    var stream = doc.pipe(blobStream());
    // draw some text
    doc.fontSize(25)
    // .text('Recipe Title' + req.body.printData.title, 100, 80)
    .text('Recipe Title: Grapefruit, carrot & apple juice')
    .moveDown()

    doc.text('Picture Here')
    // .image('../public/assets/images/31034.png', 0, 15, {width: 300})

    .moveDown()
    .text('Link to Recipe: http://www.jamieoliver.com/recipes/fruit-recipes/grapefruit-carrot-apple-juice/')
    .moveDown()
    .text(`Ingredients: 
    ½ a grapefruit
    1 apple
    3 medium carrots`);
    // end document                                     
    doc.end();
    doc.pipe(res)
    // stream.on('finish', function() {
    //   res = stream.toBlobURL('application/pdf');
    // });
  });
};
