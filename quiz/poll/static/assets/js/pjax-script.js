$(document).ready(function ($) {
    console.log("Hello im here ");
    "use strict";
    $(document).pjax("a", "#pjax-container", {timeout: 10000});

    $(document).on("pjax:beforeSend", function(e) {
    console.log("im before sending ");
             return true;

    });

    $(document).on("pjax:send", function(e) {
       // $("#loading").removeClass("hidden")
    });

    $(document).on("pjax:complete", function() {
        //$("#loading").addClass("hidden")
    });

});
