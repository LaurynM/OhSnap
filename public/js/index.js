//js for index and its modal only. 


$(document).ready(function(){
  //toggle modal
  $("#circleBtn").click(function(){
      $("#signInModal").modal();
  });
  //get username and password
  //route to send to: /api/sign-in
  $("#modalSignIn").on("click", (e)=> {
    e.preventDefault();
    //validate form first. later make sure email and password fit rules
    function validateForm(){
      var formValid = true;
      $('.form-control').each(function(){
        if($(this).val() === ''){
          alert("Fields cannot be empty.");
          formValid = false;
        }
      });
      if( $('#psw').val().trim() !== $('#psw2').val().trim() ){
        alert("Passwords are not the same.");
        formValid = false;
      }
      return formValid;
    };//end validateForm
    
    validateForm();

    if(validateForm()){
      alert("form is valid");
      const newUser = {
        user_name: $('#username').val().trim(),
        password: $('#psw').val().trim()
      };
      console.log('newUser name: '+ newUser.user_name);
      console.log('newUser password: '+ newUser.password);

      var currentURL = window.location.origin;
      $.post(currentURL+"/api/users", newUser, function(data){
        console.log("newUser sent to api"+ data);
      });//end post
    } else {
      alert("Please be sure to fill out all fields.");
    }
  })

  


}); //end document ready