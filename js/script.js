$(document).ready(function () {
    $("#header-lang button").focusin(function(){
        console.log("mtav");
        $(this).next(".content").fadeIn(200);
      });
      $("#header-lang > button").focusout(function(){
        $(this).next(".content").fadeOut(200);
      });
});

$("[data-popup]").click(function () {
  $($(this).data("popup")).fadeIn(300);
});