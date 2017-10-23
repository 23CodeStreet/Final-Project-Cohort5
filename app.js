// Wait till document is finished loading.
$(document).ready(function() {
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
    })
});
