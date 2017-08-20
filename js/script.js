var prev = document.querySelector(".popup-wrap .popup .fa-arrow-left");
var next = document.querySelector(".popup-wrap .popup .fa-arrow-right");


next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function nextSlide() {
    var activ = document.querySelector(".popup-wrap .popup .slider .active");
    activ.classList.remove("active");
    if (activ.nextElementSibling == null) {
        activ.parentNode.children[0].classList.add("active");
        activ = activ.parentNode.children[0];
    } else {
        activ.nextElementSibling.classList.add("active");
        activ = activ.nextElementSibling;
    }
}

function prevSlide() {
    var activ = document.querySelector(".popup-wrap .popup .slider .active");
    activ.classList.remove("active");
    if (activ.previousElementSibling == null) {
        var index = activ.parentNode.childElementCount - 1;
        activ.parentNode.children[index].classList.add("active");
        activ = activ.parentNode.children[index];
    } else {
        activ.previousElementSibling.classList.add("active");
        activ = activ.previousElementSibling;
    }
}

var popup = $(".popup-wrap");

$(".inline-slider li").click(function () {
    var li = $(this).index();
    var active_child = $(".popup-wrap .popup .slider").children()[li];
    $(active_child).addClass("active");
    $(popup).fadeIn();
})


$(".fa-times").click(function () {
    $(popup).fadeOut();
})
