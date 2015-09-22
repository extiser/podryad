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
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-small',
        lazyLoad: 'ondemand'
    });
    $('.slider-small').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-big',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand'
    });
    $('.portfolio-album').click(function () {
        $('.slider-big').slick('unslick');
        $('.slider-small').slick('unslick');
        var indexTab = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.portfolio-slider').eq(indexTab).addClass('active').siblings().removeClass('active');
        $('.portfolio-slider').children('.portfolio-slider-big').removeClass('slider-big');
        $('.portfolio-slider').children('.portfolio-slider-small').removeClass('slider-small');
        $('.portfolio-slider').eq(indexTab).children('.portfolio-slider-big').addClass('slider-big');
        $('.portfolio-slider').eq(indexTab).children('.portfolio-slider-small').addClass('slider-small');
        $('.slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-small',
            lazyLoad: 'ondemand'
        });
        $('.slider-small').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.slider-big',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            lazyLoad: 'ondemand'
        });
    });
});

;(function ($) {
    $('.swipebox').swipebox({
        useSVG: false
    });
})(jQuery);

$(document).ready(function () {
    $('a[data-click="modal"]').click(function () {
        var itemWindow = $(this).data('item');
        if ($(itemWindow).hasClass('active')) {
            $('.mask, .modal__close, .modal, body').removeClass('active');
        } else {
            $(itemWindow).addClass('active');
            $('.mask, body').addClass('active');
        }
    });

    $('.mask, .modal__close').click(function () {
        $('.mask, .modal__close, .modal, body').removeClass('active');
    });
    $('.specialization-item a').click(function () {
        if ($(this).hasClass('foo')) {
            void 0;
        } else {
            $(this).toggleClass('active');
        }
        var item = $('#specialization').find('a.active');
        var countItem = item.length;
        if (countItem == 10) {
            $('.specialization-item a').addClass('foo');
            if ($('.specialization-item a').hasClass('active')) {
                $(item).removeClass('foo');
            }
        } else {
            $('.specialization-item a').removeClass('foo');
        }
    });

    $('.specialization__btn').click(function () {
        var item = $('#specialization').find('a.active');
        $('.specialization-list-selected').html(' ');
        $('.mask, .modal__close, .modal, body').removeClass('active');
        if (item.length != 0) {
            $('.registration-contractor-form__btn').html('Изменить специализацию');
        } else {
            $('.registration-contractor-form__btn').html('Выбрать специализацию');
        }
        item.each(function (index, element) {
            $('.specialization-list-selected').append('<div class="specialization-list-selected__item">' + $(element).html() + '</div>');
        });
    });
});