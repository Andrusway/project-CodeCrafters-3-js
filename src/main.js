import { initHeroSwiper } from './js/hero.js';

function initAfterLoad() {
  const slider = document.querySelector('.swiper-hero');
  if (slider) {
    initHeroSwiper();
  } else {
    setTimeout(initAfterLoad, 50);
  }
}

document.addEventListener('DOMContentLoaded', initAfterLoad);
