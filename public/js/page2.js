//add item to pantry
var userId = localStorage.getItem("key");
console.log(userId);
var ingredients = [];

$('#pantry-input').on('click', function() {
    
   if($('#basics').val()){
      ingredients = [];
        $('#inputMsg').remove();
        var addItem = {
            user_id: parseInt(userId),
            item:  $('#basics').val().trim()
        };
        $('#basics').val("");
        console.log(addItem);
        submitNewPantryItem(addItem);        
   }else{
      $('#inputMsg').remove();
      $('#lblPntry').append('<div id="inputMsg">Please enter something to add to pantry!</div>');
   }
   
});

var input = document.getElementById("basics");
var awesomeplete = new Awesomplete(input);
function recipeapicallback(fillData) {
    awesomeplete.list = fillData;
}
var inString;
$('#basics').on('input', function() {
     inString = $(this).val();
    getAutocomplete(inString);
});
function getAutocomplete(inString){
    var queryURL = `http://api.edamam.com/auto-complete?q=${inString}&limit=10&app_id=cb021850&app_key=3f0c4b8c9adcb08d63cbde97230db9f8&callback=recipeapicallback`
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: 'jsonp'
      });
    
};


function submitNewPantryItem(addItem) {
    $.post("/api/pantry", addItem, function(req, res) {
      console.log("req");
      console.log(req);
      console.log("res");
      console.log(res);
    });
   
    getPantryItems()
  }

  getPantryItems()

function getPantryItems(){
    $.get("/api/pantry/"+ userId, function(data) {
        console.log("req");
        console.log(data);
        showUserItems(data);
      });
}

function showUserItems(data){
    $('.pantry-item').remove();
    
    $.each( data, function( key, value ) {
        console.log( data[key].item);
        console.log( data[key].id);
        $(".pantryDiv").append(`
          <span class="pantry-item" id="${data[key].id}"">
            <a href='javascript:void(0);' class='remove'>&cross;</a>${data[key].item}<a href='javascript:void(0);' class='add'>&check;</a>
          </span>`);
      });

      
}

$(document).on("click", "a.remove" , function() {
  $(this).parent().remove();
  removeID = $(this).parent().attr("id");
  console.log(`Removed ID: ${removeID}`);
  deleteItem(removeID);
}); 

//add pantry items to ingredient search list
$(document).on("click", "a.add" , function() {
  var item = $(this).parent().text().trim();
    
//remove the special characters from the beginning and end of the ingredient
  item = item.substr(1,(item.length-2));         
  if ($(this).attr("id") == "added") {
    console.log("Item removed: " + item);
    $(this).parent().css('background-color', 'white');
    var i = ingredients.indexOf(item);
    ingredients.splice(i, 1);
    //remove the clicked item fron the ingreidients search
    $(this).attr("id", "removed")
    console.log(ingredients);
  } else {
    console.log("Item added: " + item);
    $(this).parent().css('background-color', '#9fdde0');
    ingredients.push(item);
    console.log(ingredients);
    $(this).attr("id", "added")
  }
});


function deleteItem(id) {
  console.log("deleting : "+id)
  $.ajax({
    method: "DELETE",
    url: "/api/pantry/" + id
  })
    .then(function() {
      getPantryItems();
    });
  }
$("#searchRecipes").on('click',function(){
  if(ingredients.length>0){
    runRestrictedDietAPI();
  }else{
    $(".cardGroup").empty();
  }
    
});

//runs restricted diet recipe search API
function runRestrictedDietAPI(){
  var strIngredient = "";
  //concats array with wildcard for better api search
  $.each(ingredients, function(index,value){
    strIngredient += value +"%20";
  })
  var queryURL = `https://api.edamam.com/search?q=${strIngredient}&app_id=2e4ce701&app_key=20b246a2d182f864dd85c155afc277d3`
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    createRecipeCards(response);
  });    
};

function createRecipeCards(response){
  $(".cardGroup").empty();
  $.each(response.hits, function(index, value){
    var hits = index;
    $(".cardGroup").append(`
    <div class="recipeCard">
      <div class="imgDiv">
        <img src="${value.recipe.image}" alt="${value.recipe.label}">
      </div>
      <div class="recipeLabel">
        <h5>${value.recipe.label}</h5>
      </div>
      <p class = "cals">Individual Serving Calories: ${parseInt(value.recipe.calories/value.recipe.yield)}</p>
      <button class="recipeBtn"><a href="${value.recipe.url}">Link to source</a></button>
      <button type="button" class="nutBtn" data-toggle="modal" data-target="#a${hits}exampleModal">Ingredients</button>
      <!-- Modal -->
      <div class="modal fade" id="a${hits}exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="a${hits}exampleModalLabel">Ingredient List</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <ul id="a${hits}">
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="printBtn" data-toggle="modal" data-target="#a${hits}printModal" id="print${hits}">Print as PDF</button>
      <!-- Print Modal -->
      <!-- 
      <div class="modal fade" id="a${hits}printModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body" id="body${hits}" >

              <iframe id="frame${hits}" ></iframe>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      -->
    </div>
            `)
    $.each(value.recipe.ingredients, function(index, value){          
      $('#a'+hits).append(`<li>${value.text}</li>`)  
    })
  });   
}

