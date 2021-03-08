/*Top headline time tsable script*/

        (function($) {
    var $window = $(window),
        $html = $('#remove-nav-c');

    function resize() {
        if ($window.width() > 768) {
            return $html.addClass('nav-1 ');
        }

        $html.removeClass('nav-1');
    }
    
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);

        (function($) {
    var $window = $(window),
        $html = $('#top_grid');

    function resize() {
        if ($window.width() < 768) {
            return $html.addClass('slyder-nav ');
        }

        $html.removeClass('slyder-nav');
    }
    
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);

   (function ($){
            $('.slyder-nav').slyder({
                back: '.s-back .s-link',
                current: 's-current',
                hidden: 's-hidden',
                item: '.s-item',
                link: 'span .s-link',
                wrapper: 'slyder-wrapper'
            });
        })(jQuery);
        //in your main JS file


(function($) {
    var $window = $(window),
        $html = $('#top_grid');

    function resize() {
        if ($window.width() > 768) {
            return $html.addClass('owl-carousel ');
        }

        $html.removeClass('owl-carousel');
    }
    
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);



/* top END*/
 $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                loop: true,
                nav: true,
                navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],                  
                autoWidth:true,
                items:12               
              });
              owl.on('mousewheel', '.owl-stage', function(e) {
                if (e.deltaY > 0) {
                  owl.trigger('next.owl');
                } else {
                  owl.trigger('prev.owl');
                }
                e.preventDefault();
              });
            })


