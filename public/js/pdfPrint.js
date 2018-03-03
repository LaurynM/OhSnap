$(document).on('click', '.printBtn', function(){
  var index = this.id;
  index = index.replace("print", "");
  alert("You clicked on id: " + index);

  var printData = {
    title: "demo"
  }
  
  var iframeID = "frame" + index;
  $.ajax({url: "/api/pdf", data: printData, success: function(result){
      var blob = new Blob([result], {type : 'application/pdf'});
      var output = window.URL.createObjectURL(blob);
      console.log("frame ID: " + iframeID)
      document.getElementById(iframeID).src = output;
      console.log("output: " + output);
  }});
});