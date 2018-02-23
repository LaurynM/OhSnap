//js for index and its modal only. 


$(document).ready(function(){
  //toggle modal
  $("#circleBtn").click(function(){
      $("#signInModal").modal();
  });

  //get username and password
  $("#modalSignIn").on("click", (e)=> {
    e.preventDefault();

    var newUser = {
      name: $("#username").val().trim(),
      password: $("#psw").val().trim(),
      password2: $("#psw2").val().trim(),
    };
    console.log('newUser name: '+ newUser.name);
    console.log('newUser password: '+ newUser.password);
    console.log('newUser password 2: '+ newUser.password2);
    validateForm();
  })

  function validateForm(){
    var formValid = true;

    $('.form-control').each(function(){
      
      if($(this).val() === ''){
        console.log("empty");
      }
    });
  //   if$(('#psw').val().trim() !== $('#psw2').val().trim()){
  //     alert("Passwords are not the same.");
  //     formValid = false;
  //   }
    return formValid;
  };//end validateForm


}); //end document ready