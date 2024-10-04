
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 110) {
            $('.text-logo').height(0);
            $('.img-logo').height(40);
        } else {
            $('.text-logo').height(60);
            $('.img-logo').height(115);
        }
    });
});




