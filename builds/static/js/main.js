
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
        var item = $('#specialization').find('.specialization-item a.active');
        // item.each(function () {
        //     var itemValue = $(this).html();
        //     var curValue = $('#specialization-input').val();
        //     $('#specialization-input').val(curValue + itemValue + '|');
        // });
        if (item.length >= 10) {
            $('.specialization-item a').addClass('foo');
        } else {
            $('.specialization-item a').removeClass('foo');
        }
    });
});