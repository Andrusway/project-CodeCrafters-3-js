import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

export function initHeroSwiper() {
  const swiper = new Swiper('.swiper-hero', {
    modules: [Navigation, Keyboard],

    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.hero-swiper-button-next',
      prevEl: '.hero-swiper-button-prev',
      disabledClass: 'hero-swiper-button-disabled',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      0: { spaceBetween: 16 },
      768: { spaceBetween: 32 },
      1440: { spaceBetween: 64 },
    },
  });

  function updateButtons() {
    const prevBtn = document.querySelector('.hero-swiper-button-prev');
    const nextBtn = document.querySelector('.hero-swiper-button-next');

    if (prevBtn) prevBtn.disabled = swiper.isBeginning;
    if (nextBtn) nextBtn.disabled = swiper.isEnd;
  }

  swiper.on('init', updateButtons);
  swiper.on('slideChange', updateButtons);

  return swiper;
}
