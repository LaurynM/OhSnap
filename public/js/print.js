
// var PDFDocument = require("pdfkit");
// var doc = new PDFDocument();

// $(document).ready(function(){
//     $("#print-result").click(function(){
//         alert("You clicked print.");
//         // draw some text
//         doc.fontSize(25)
//         .text('Recipe Title', 100, 80)
//         .moveDown()
//         .text('Picture Here', 100, 80)
//         .moveDown()
//         .text('Link to Recipe', 100, 80)
//         .moveDown()
//         .text('Ingredients', 100, 80);
//         // end and display the document in the iframe to the right
//         doc.pipe(res);                                     
//         doc.end();
//     });
// });





module.exports = function(PDFDocument, blobStream) {
    var doc = new PDFDocument();
    doc.fontSize(25)
        .text('Recipe Title', 100, 80)
        .moveDown()
        .text('Picture Here', 100, 80)
        .moveDown()
        .text('Link to Recipe', 100, 80)
        .moveDown()
        .text('Ingredients', 100, 80);
        // end and display the document in the iframe to the right
        // doc.pipe(res);                                     
        doc.end();
};