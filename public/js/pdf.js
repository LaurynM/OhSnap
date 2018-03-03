
var PDFDocument = require("pdfkit");
var blobStream  = require("blob-stream");

var doc = new PDFDocument();
var stream = doc.pipe(blobStream());
var url = "";

// $('.printBtn').on('click', function() {

        // draw some text
        doc.fontSize(25)
        .text('Recipe Title', 100, 80)
        .moveDown()
        .text('Picture Here', 100, 80)
        .moveDown()
        .text('Link to Recipe', 100, 80)
        .moveDown()
        .text('Ingredients', 100, 80);
        // end document
        
        // doc.pipe(res);                                     
        doc.end();
        // display the document in the iframe
        stream.on('finish', function() {
          // $("iframe").src = stream.toBlobURL('application/pdf');
          // iframe.src = stream.toBlobURL('application/pdf');
          url = stream.toBlobURL('application/pdf');
        });
// });

console.log("url is: " + url);

module.exports = function (n) { return n * 111 }

// });

// module.exports = function(PDFDocument, blobStream) {
//     var doc = new PDFDocument();
//     doc.fontSize(25)
//         .text('Recipe Title', 100, 80)
//         .moveDown()
//         .text('Picture Here', 100, 80)
//         .moveDown()
//         .text('Link to Recipe', 100, 80)
//         .moveDown()
//         .text('Ingredients', 100, 80);
//         // end and display the document in the iframe to the right
//         // doc.pipe(res);                                     
//         doc.end();
// }