$(document).ready(function () {
  $('.intro__slider').slick({
    arrows: false,
    dots: true
  });

  // табы
  $('.tabs__row').on('click', '.tabs__item:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs__wrap').find('.tabs__content-item').removeClass('active').eq($(this).index()).addClass('active');
  });

  // маска
  $('.phone').mask('+7(999)999-99-99');


  // открытие модалки
  const callbackBtn = document.querySelector('.header__callback');
  const callbackClose = document.querySelector('.popup-form__close');
  const callbackForm = document.querySelector('.popup-form');
  const overlay = document.querySelector('.overlay');

  callbackBtn.addEventListener('click', function () {
    callbackForm.classList.add('active');
    overlay.classList.add('active');
    menu.classList.remove('active');
  });

  callbackClose.addEventListener('click', function () {
    callbackForm.classList.remove('active');
    overlay.classList.remove('active');

  });

  //открытие меню
  const burger = document.querySelector('.burger');
  const menuClose = document.querySelector('.header__nav-close');
  const menu = document.querySelector('.header__nav');

  burger.addEventListener('click', function () {
    menu.classList.add('active');

  });

  menuClose.addEventListener('click', function () {
    menu.classList.remove('active');
  });

  // баг меню при ресайзе
  window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth < 992) {
      menu.classList.remove('active');
    }
  });


});
