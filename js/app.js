// Wait till document is finished loading.
$(document).ready(function() {

  // Animated dropdown menu
  $(".dropbtn").on("click", function(){
    $(this).toggleClass("change");
    $("nav").slideToggle(800);
  });

  // SHOW & HIDE sections in form.html
  // Attach a click event to the buttons.
  $(".js-activator").on("click", function(){

    // Hide all sections in main
    $("main > section").hide();

    // Use the attribute  "data-section" to get the related section.
    var index = $(this).attr("data-section");

    // Construct the class name.
    var section = "." + index;

    // Show related section.
    $(section).show();

  });
  
  $(".js-img").on("click", function() {
    var self = $(this);
    self.addClass("active");
  });
  
  $(".refresh").on("click", function() {
    location.reload();
  });

  function myFunction() {
    location.reload();
  }
});/* <- document ready function */
