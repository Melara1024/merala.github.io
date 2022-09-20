(function($) {
    $(function() {
        var $article = $('.article');
        var $header = $('.header');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 350) {
                $article.addClass('fixed');
                $article.addClass('fixed');
            } else {
                $header.removeClass('fixed');
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $article.toggleClass('open');
        });

        $('.tab_content').click(function(){
            $article.removeClass('open');
        });
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });

        $('.tab_content').click(function(){
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