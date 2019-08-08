$(document).ready(function () {
    $(document).on('click', '#mobile-search-btn', function () {
        $('.navbar .navbar-right .form-group').toggle(function () {
            $(".navbar .navbar-right .form-group").css({border: "0px"});
        }, function () {
            $(".navbar .navbar-right .form-group").css({border: "0px"});
        });
    });
});