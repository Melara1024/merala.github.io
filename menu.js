(function($) {
    $(function() {
        var $header = $('#head_wrap');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });

        $('#nav-closer').click(function(){
            $header.removeClass('open');
        });
    });
})(jQuery);

$(function(){
    $('a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 1200;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});