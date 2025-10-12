import { initHeroSwiper } from './js/hero.js';
import { openNavbar, closeNavbar} from "./js/handlers";;
import { handleScreenChange } from "./js/helpers";
import { navbarBtn, navbarCloseBtn, mediaQuery } from "./js/refs";
import './js/books';

function initAfterLoad() {
  const slider = document.querySelector('.swiper-hero');
  if (slider) {
    initHeroSwiper();
  } else {
    setTimeout(initAfterLoad, 50);
  }
}

document.addEventListener('DOMContentLoaded', initAfterLoad);


handleScreenChange(mediaQuery)
mediaQuery.addEventListener("change", handleScreenChange)

navbarBtn.addEventListener("click", openNavbar);
navbarCloseBtn.addEventListener("click", closeNavbar);
// navbarList.addEventListener("click", handleNavigation); 

