$(document).ready(function () {
    $("#text-2,#text-3,#text-4").hide();
    $('.accordion-1').click(function () {

        const paragraph =  $(this).find(".paragraph")
        if ($(paragraph).is(':visible')) {
            $(paragraph).hide();
            $(this).find('.bi-dash').removeClass("bi-dash").addClass("bi-plus");
        }
        else {
            $('.bi-dash').removeClass("bi-dash").addClass("bi-plus");
            $(this).find('.bi-plus').removeClass("bi-plus").addClass("bi-dash");
            $(".paragraph").hide();
            $(paragraph).show();
        }
    });

});
    
