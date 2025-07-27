$(document).ready(function () {
  const headheight = $(".navbar ").outerHeight();
  var width = $(window).width();
  if (width < 1200){
    $(".inner-comoonbanner").css("margin-top",headheight);
  }

 console.log(width);
});
