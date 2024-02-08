$(function() {

    // Fixed header
    let header = $("#header");
    let intro = $("#intro"); 
    let introH = intro.outerHeight(); 
    let scrollPos = $(window).scrollTop(); 

    checkScroll(scrollPos, introH);

    $(window).on("scroll load resize", function () {
        introH = intro.outerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if(introH < scrollPos) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 800)
    });


});
