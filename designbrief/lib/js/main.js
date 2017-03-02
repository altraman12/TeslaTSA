//WARNING: This code runs on ALL pages, if it shouldn't, put it somewhere else
$(document).ready(function() {
    $('.angled-border').angledBorder();

    function stickScroll () {
        var window_top = $(window).scrollTop();
        var div_top = $('#nav').prev().height();
        if (window_top > div_top) {
            $('#nav').addClass('affix');
        } else {
            $('#nav').removeClass('affix');
        }
    }

    $(window).scroll(stickScroll);

    stickScroll();
});
