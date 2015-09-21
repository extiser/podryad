$(document).ready(function () {
    $('.contractor-block-info-show').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').parent().children('span').empty();
            $(this).html($(this).text().replace('скрыть', 'показать'));
        } else {
            var dataShow = $(this).data('show');
            $(this).addClass('active').parent().append('<span>' + dataShow + '</span>');
            $(this).html($(this).text().replace('показать', 'скрыть'));
        }
        return false;
    });
    $('.contractor-tabs-control__item').click(function () {
        var indexTab = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.contractor-tabs-box__item').eq(indexTab).addClass('active').siblings().removeClass('active');
        return false;
    });
});

;(function ($) {
    $('.swipebox').swipebox({
        useSVG: false
    });
})(jQuery);