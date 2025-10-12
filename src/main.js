import { initHeroSwiper } from './js/hero.js';
import { openNavbar, closeNavbar } from "./js/handlers";
import { NAVBAR_BTN, NAVBAR_CLOSE_BTN, NAVBAR_LIST } from "./js/constants";


function initAfterLoad() {
  const slider = document.querySelector('.swiper-hero');
  if (slider) {
    initHeroSwiper();
  } else {
    setTimeout(initAfterLoad, 50);
  }
}

document.addEventListener('DOMContentLoaded', initAfterLoad);

NAVBAR_BTN.addEventListener("click", openNavbar);
NAVBAR_CLOSE_BTN.addEventListener("click", closeNavbar);
