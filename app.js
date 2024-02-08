$(function() {
    let header = $("#header");
    let intro = $("#intro"); 
    let introH; 
    let scrollPos = $(window).scrollTop(); 

    $(window).on("scroll load resize", function () {
        intro.outerHeight();
        scrollPos = $(this).scrollTop();

        if(introH < scrollPos) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
});
