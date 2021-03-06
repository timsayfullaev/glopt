$(document).ready(function(){
    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="reviews__arrow reviews__arrow_left"><img src="icons/rounded_rectangle_2_copy_7_493.png" alt="rounded_rectangle_2_copy_7_493"></button>',
        nextArrow: '<button type="button" class="reviews__arrow reviews__arrow_right"><img src="icons/rounded_rectangle_2_copy_2_492.png" alt="rounded_rectangle_2_copy_2_492"></button>',
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    });
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__nav'),
    menuClose = document.querySelector('.menu__close'),
    menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
});

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
});