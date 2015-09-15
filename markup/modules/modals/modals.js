$(document).ready(function () {
    $('a[data-click="modal"]').click(function () {
        var itemWindow = $(this).data('item');
        $(itemWindow).toggleClass('active');
        $('.mask, body').toggleClass('active');
    });

    $('.mask, .modal__close').click(function () {
        $('.mask, .modal__close, .modal, body').removeClass('active');
    });
});