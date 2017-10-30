$(document).ready(function(){
  $(".js-activator").on ("click", function(){
    $("main > section").hide();


    var index = $(this).attr("data-section")
    $("." +index).show();  

    console.log(index)
 })
});