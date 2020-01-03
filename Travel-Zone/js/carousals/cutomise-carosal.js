$(document).ready(function () {
   
    var owl = $('#topCarosal');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: true,
        navText: ["<img src='images/icons/Backward-arrow-small.png'>", "<img src='images/icons/Forward-arrow-small.png'>"]
    });
    var owl1 = $('#destinations');
    owl1.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        navText: ["<img src='images/icons/Carusal-left.png'>", "<img src='images/icons/Carusal-right.png'>"],
        responsive: {
            0: {
                items:1.2,
            },
            600: {
                items:2.2,
            },
            1000: {
                items: 3.2,
            },
            1300: {
                items: 4.2,
            }
        }
    });
    var owl1 = $('#venue-car-area0');
    owl1.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        navText: ["<img src='images/icons/Carusal-left.png'>", "<img src='images/icons/Carusal-right.png'>"],
        responsive: {
            0: {
                items: 1.2,
            },
            1000: {
                items: 3.2,
            },
            1300: {
                items: 4.2,
            }
        }
    });
    var owl1 = $('#venue-car-area1');
    owl1.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        navText: ["<img src='images/icons/Carusal-left.png'>", "<img src='images/icons/Carusal-right.png'>"],
        responsive: {
            0: {
                items: 1.2,
            },
            1000: {
                items: 3.2,
            },
            1300: {
                items: 4.2,
            }
        }
    });
    var owl1 = $('#venue-car-area2');
    owl1.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        navText: ["<img src='images/icons/Carusal-left.png'>", "<img src='images/icons/Carusal-right.png'>"],
        responsive: {
            0: {
                items: 1.2,
            },
            1000: {
                items: 3.2,
            },
            1300: {
                items: 4.2,
            }
        }
    });
    var owl1 = $('#venue-car-area3');
    owl1.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        navText: ["<img src='images/icons/Carusal-left.png'>", "<img src='images/icons/Carusal-right.png'>"],
        responsive: {
            0: {
                items: 1.2,
            },
            1000: {
                items: 3.2,
            },
            1300: {
                items: 4.2,
            }
        }
    });
});