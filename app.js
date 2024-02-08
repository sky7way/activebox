$(function() {

    // Fixed header
    let header = $("#header");
    let intro = $("#intro"); 
    let introH = intro.outerHeight(); 
    let scrollPos = $(window).scrollTop(); 
    let nav = $("#nav");
    let navToggle = $("#navToggle");

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

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 800)
    });

// Nav Toggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


});
