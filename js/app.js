// JavaScript
// wow js activation code
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();



// jQuery
$(document).ready(function () {
    // Counter up function
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Counter up 2 function
    $('.counter2').countMe(230, 40);
    $('.counter3').countMe(30, 40);
    $('.counter4').countMe(20, 40);

    // loading overlay
    $('.example').loadingOverlay(true, {
        backgroundColor: 'rgba(1,1,255,0.3)', icon: '../vendor/minimal-custom-overlay/loading-icon.svg'

    });

    // carousel jq

    $('.demo').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


});