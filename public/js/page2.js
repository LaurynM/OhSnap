//add item to pantry
var userId = 2;


$('#pantry-input').on('click', function() {
    
   if($('#basics').val()){
        $('#inputMsg').remove();
        var addItem = {
            user_id: parseInt(userId),
            item:  $('#basics').val().trim()
        };
        $('#basics').val("");
        console.log(addItem);
        submitNewPantryItem(addItem);        
   }else{
       console.log("no val")
       $('#lblPntry').append('<div id="inputMsg">Please enter something to add to pantry!</div>');
   }
   
});


function submitNewPantryItem(addItem) {
    $.post("/api/pantry", addItem, function(req, res) {
      console.log("req");
      console.log(req);
      console.log("res");
      console.log(res);
      //window.location.href = "/page2.html";
    });
   
    getPantryItems()
  }

  getPantryItems()

function getPantryItems(){
    $.get("/api/pantry/"+ userId, function(data) {
        console.log("req");
        console.log(data);
        
        //window.location.href = "/page2.html";
      });
}
// runRestrictedDietAPI(ingredients);
// //runs restricted diet recipe search API
// function runRestrictedDietAPI(ingredients){
//     var strIngredient = "";
//     //concats array with wildcard for better api search
//     $.each(ingredients, function(index,value){
//         strIngredient += value +"%20";
//     })
//     var queryURL = `https://api.edamam.com/search?q=${strIngredient}&app_id=2e4ce701&app_key=20b246a2d182f864dd85c155afc277d3`
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).done(function(response) {
//            console.log(response);
//       createRecipeCards(response);
//       });    
//  };

