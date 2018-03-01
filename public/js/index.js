//js for index and its modal only. 
// signUpForm {
//   display:none;
// }


$(document).ready(function(){
  //toggle modal
  $("#circleBtn").click(function(){
      $("#signInModal").modal();
  });
  $("#signUpDiv").click(function(){
    clearFields();
    $(".signInForm").css( "display", "none" );
    $(".signUpForm").css( "display", "block" );
    // activeBtn
    $(this).addClass("activeBtn");
    $("#signInDiv").removeClass("activeBtn");
  });
  $("#signInDiv").click(function(){
    clearFields();
    $(".signInForm").css( "display", "block" );
    $(".signUpForm").css( "display", "none" );
    $(this).addClass("activeBtn");
    $("#signUpDiv").removeClass("activeBtn");
  });

  $("#modalSignUp").on("click", (e)=> {
    e.preventDefault();
    function validateSignUp(){
      var formValid = true;
      $('.signUpFormControl').each(function(){
        if($(this).val() === ''){
          formValid = false;
        }
      });
      if( $('#psw1').val().trim() !== $('#psw2').val().trim() ){
        alert("Passwords are not the same.");
        formValid = false;
      }
      return formValid;
    };//end validateForm
    
    validateSignUp();

    if(validateSignUp()){
      const newUser = {
        user_name: $('#newUsername').val().trim(),
        password: $('#psw1').val().trim()
      };
      console.log('newUser name: '+ newUser.user_name);
      console.log('newUser password: '+ newUser.password);
      submitNewUser(newUser);
    } 
  }); //end the sign UP onclick evt 


  $("#modalSignIn").on("click", (e)=> {
    e.preventDefault();

    function validateSignIn(){
      var formValid = true;
      $('.signInFormControl').each(function(){
        if($(this).val() === ''){
          formValid = false;
        }
      });
      return formValid;
    };//end validateForm
    
    validateSignIn();

    if(validateSignIn()){
      alert("Sign in is valid");
      const User = {
        user_name: $('#username').val().trim(),
        password: $('#psw').val().trim()
      };
      console.log('newUser name: '+ User.user_name);
      console.log('newUser password: '+ User.password);
      submitUser(User);
    } 
  });

  function submitNewUser(NewUser) {
    $.post("/api/users/", NewUser, function() {
      console.log("I want to sign in as a NEW user");
      window.location.href = "/page2.html";
    });
    clearFields();
  }
  function submitUser(User) {
    $.get("/api/sign-in", User, function() {
      console.log("I want to log in as an existing user");
      window.location.href = "/page2.html";
    });
    clearFields();
  }
  
  function clearFields(){
    $('#username').val('');
    $('#newUsername').val('');
    $('#psw').val('');
    $('#psw1').val('');
    $('#psw2').val('');  
  }

}); //end document ready