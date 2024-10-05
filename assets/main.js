
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > 110) {
            document.querySelector('.text-logo').style.height = '0';
            document.querySelector('.img-logo').style.height = '40px';
        } else {
            document.querySelector('.text-logo').style.height = '60px';
            document.querySelector('.img-logo').style.height = '115px';
        }
    });
});
