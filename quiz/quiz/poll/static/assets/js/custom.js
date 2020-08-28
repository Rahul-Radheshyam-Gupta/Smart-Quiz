

$('[data-toggle="popover]').popover({
    html: true,
    trigger: 'click',
    container: $(this).attr('id'),
    content: function () {
        $return = '<div class="hover-hovercard"></div>';
    }
}).on("mouseenter", function () {
    var _this = this;
    $(this).popover("show");
    $(this).siblings(".popover").on("mouseleave", function () {
        $(_this).popover('hide');
    });
}).on("mouseleave", function () {
    var _this = this;
    setTimeout(function () {
        if (!$(".popover:hover").length) {
            $(_this).popover("hide")
        }
    }, 100);
});


  
 /* $(".btn_demo").forEach(function(){
    $(this).setAttribute("disabled", true);

  });*/

/*$('#output, .remove-btn i').hover(function () {
    $('a.remove-btn').css('display', 'inline-block');
    $('#output').css('opacity' , '.5');
});
$('#output').mouseleave(function () {
    $('a.remove-btn').css('display', 'none');
    $('#output').css('opacity' , '1');
});
*/

/*$('.nav-link').on('click', function () {
    e.preventDefault();

});*/

/*$(document).click(function(e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');
    }

});*/




$('select').on(
    'select2:close',
    function () {
        $(this).focus();
    }
);


