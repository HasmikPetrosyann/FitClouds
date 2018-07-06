$(document).ready(function(){
  var $email = $("#email");
  $email.blur(function () {
    function validEmail(correctE) {
      var checking = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      return checking.test(correctE)
    }
    if ($(this).val().length === 0) {
      $email.addClass("requiredInp");
      $(".emailError").css({"display": "block"}).text("Please write your email which you use now");
    } else if (validEmail($(this).val()) === true) {
        $email.removeClass("requiredInp");
        $(".emailError").css({"display": "none"})
      } else  {
          $email.addClass("requiredInp");
          $(".emailError").css({"display": "block"}).text("Please write validate email");
        }
  });
  $email.focus(function () {
    if ($email.hasClass("requiredInp")) {
      $email.removeClass("requiredInp");
        $(".emailError").css({"display": "none"});
    };
  });
  var $firstName = $("#username");
  $firstName.blur(function () {
    function validName(correctE) {
      var checking = /^([a-zA-Z]{3,16})$/;
      return checking.test(correctE)
     }
    if ($(this).val().length === 0) {
      $firstName.addClass("requiredInp");
      $(".first_error").text("Write your first name");
    }else if (validName($(this).val()) === true){
        $firstName.removeClass("requiredInp");
        $(".first_error").css({"display": "none"})
      }else{
          $firstName.addClass("requiredInp");
          $(".first_error").css({"display": "block"}).text("First name is wrong");
        }
  });
  $firstName.focus(function () {
    if ($firstName.hasClass("requiredInp")) {
      $firstName.removeClass("requiredInp");
      $(".first_error").css({"display": "none"});
    };
  });

  var $lastName = $("#lastname");
  $lastName.blur(function () {
    function validName(correctE) {
      var checking = /^([a-zA-Z]{3,16})$/;
      return checking.test(correctE)
    }
    if ($(this).val().length === 0) {
      $lastName.addClass("requiredInp");
      $(".last_error").text("Write your last name");
    } 
    else if (validName($(this).val()) === true) {
        $lastName.removeClass("requiredInp");
        $(".last_error").css({"display": "none"})
      } 
    else{
        $lastName.addClass("requiredInp");
        $(".last_error").css({"display": "block"}).text("Last name is wrong");
        }
    });
  $firstName.focus(function () {
    if ($lastName.hasClass("requiredInp")) {
      $lastName.removeClass("requiredInp");
      $("last_error").css({"display":"none"});
    };
  });
});
