$(document).on('click', '.printBtn', function(){
  var index = this.id;
  index = index.replace("print", "");
  console.log("You clicked on id: " + index);

  var printData = {
    title: "demo"
  }
  
  var iframeID = "frame" + index;
  // $.ajax({url: "/api/pdf", method: "GET", data: printData, success: function(result){
  //     var blob = new Blob([result], {type : 'application/pdf'});
  //     var output = window.URL.createObjectURL(blob);
  //     console.log("frame ID: " + iframeID)
  //     document.getElementById(iframeID).src = output;
  //     console.log("output: " + output);
  // }});
  
  
  var req = new XMLHttpRequest();
  req.open("GET", "/api/pdf", true);
  req.responseType = "blob";

  req.onload = function (event) {
    var blob = req.response;
    console.log(blob.size);
    var link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download="Dossier_" + new Date() + ".pdf";
    link.click();
      // var output = window.URL.createObjectURL(blob);
      // console.log("frame ID: " + iframeID)
      // document.getElementById(iframeID).src = output;
      // console.log("output: " + output);
  };

  req.send(printData);
});