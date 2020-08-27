new WOW().init();

$(document).ready(function() {
    jQuery.event.special.touchstart = {
        setup: function( _, ns, handle ){
          this.addEventListener("touchstart", handle, { passive: true });
        }
      };
    
    var owl1 = $('#owl1');
    owl1.owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000, 
        autoplayHoverPause: true,
        responsiveClass: true, 
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    var owl2 = $('#owl2');
    owl2.owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000, 
        autoplayHoverPause: true,
        responsiveClass: true, 
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(function() {

        $('.loop').on('initialized.owl.carousel translate.owl.carousel', function(e) {
          idx = e.item.index;
          $('.item').removeClass('low');
          $('.item').eq(idx + 2).addClass('low');
          $('.item').eq(idx - 0).removeClass('low');
          $('.item').eq(idx - 2).addClass('low');
        });
    });
});




