import { initHeroSwiper } from './js/hero.js';
import { initFeedbacksSwiper } from './js/feedbacks.js';
import { openNavbar, closeNavbar } from './js/handlers';
import { handleScreenChange } from './js/helpers';
import { navbarBtn, navbarCloseBtn, mediaQuery } from './js/refs';
import './js/books';

function initAfterLoad() {
  const heroSlider = document.querySelector('.swiper-hero');
  if (heroSlider) {
    initHeroSwiper();
  }

  const feedbacksSlider = document.querySelector('.feedbacks-swiper');
  if (feedbacksSlider) {
    initFeedbacksSwiper();
  }
}

document.addEventListener('DOMContentLoaded', initAfterLoad);

handleScreenChange(mediaQuery);
mediaQuery.addEventListener('change', handleScreenChange);

navbarBtn.addEventListener('click', openNavbar);
navbarCloseBtn.addEventListener('click', closeNavbar);
// navbarList.addEventListener("click", handleNavigation);
