$(document).ready(function () {

  const mobileSearchButton = $('.search-button');
  const mobileMenuButton = $('.menu-button');
  const mobileMenu = $('.m-menu');
  const tab = $('.tab');

  const showMobileMenu = () => {
    mobileMenu.toggleClass('visible');
    $('body').toggleClass('no-scroll');
  };
  const changeTab = function () {
    tab.removeClass('active');
    $(this).toggleClass('active');
    let activeTab = $(this).attr('data-target');
    let contentToShow = $(activeTab);
    $('.content').removeClass('visible');
    contentToShow.toggleClass('visible');
  };

  mobileSearchButton.on('click', showMobileMenu);
  mobileMenuButton.on('click', showMobileMenu);
  tab.on('click', changeTab);

  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 25,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: '.next',
        }
      }
    }
  });
});