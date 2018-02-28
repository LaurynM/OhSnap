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
    $(".signInForm").css( "display", "none" );
    $(".signUpForm").css( "display", "block" );
    // activeBtn
    $(this).addClass("activeBtn");
    $("#signInDiv").removeClass("activeBtn");
  });
  $("#signInDiv").click(function(){
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
          alert("Fields cannot be empty.");
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
      alert("form is valid");
      const newUser = {
        id:"",
        user_name: $('#username').val().trim(),
        password: $('#psw1').val().trim()
      };
      console.log('newUser name: '+ newUser.user_name);
      console.log('newUser password: '+ newUser.password);
      submitNewUser(newUser);
    } else {
      alert("Please be sure to fill out all fields.");
    }
  }); //end the sign UP onclick evt 


  // $("#modalSignIn").on("click", (e)=> {
  //   e.preventDefault();
  //   function validateSignIn(){
  //     var formValid = true;
  //     $('.form-control').each(function(){
  //       if($(this).val() === ''){
  //         alert("Fields cannot be empty.");
  //         formValid = false;
  //       }
  //     });
  //     return formValid;
  //   };//end validateForm
    
  //   validateSignIn();

  //   if(validateSignIn()){
  //     alert("form is valid");
  //     const User = {
  //       id:"",
  //       user_name: $('#username').val().trim(),
  //       password: $('#psw').val().trim()
  //     };
  //     console.log('newUser name: '+ newUser.user_name);
  //     console.log('newUser password: '+ newUser.password);
  //     submitNewUser(newUser);
  //   } else {
  //     alert("Please be sure to fill out all fields.");
  //   }
  // });

  function submitNewUser(NewUser) {
    $.post("/api/users/", NewUser, function() {
      console.log("I want to sign in as a NEW user");
      window.location.href = "/page2.html";
    });
  }
  function submitUser(User) {
    $.get("/api/users/:id", User, function() {
      console.log("I want to log in as an existing user");
      window.location.href = "/page2.html";
    });
  }
  


}); //end document ready