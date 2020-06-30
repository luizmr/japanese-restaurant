$(document).ready(function () {
    // navbar-toggle

    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
    });

    // sticky navbar less padding

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 718) {
            $(".navbar").addClass("navbar-background");
            $(".navbar").addClass("fixed-top");
        } else {
            $(".navbar").removeClass("navbar-background");
            $(".navbar").removeClass("fixed-top");
        }
    });

    // smooth scroll

    $(".nav-item a, .header-link, #back-to-top").click(function (link) {
        link.preventDefault();

        let target = $(this).attr("href"); //returns the href attr of link and save in target

        // add stop() to stop every click made when u click something new and go to this new target
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $(target).offset().top - 50,
                },
                3000
            );
    });

    // back to top scroll

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 718) {
            $("#back-to-top").addClass("scrollTop");
        } else {
            $("#back-to-top").removeClass("scrollTop");
        }
    });

    // ripples

    $("#header, .info").ripples({
        dropRadius: 10,
        perturbance: 0,
    });

    // magnific popup

    $(".parent-container").magnificPopup({
        delegate: "a", // child items selector, by clicking on it popup will open
        type: "image",
        // other options

        gallery: {
            enabled: true,
        },
    });
});

//
