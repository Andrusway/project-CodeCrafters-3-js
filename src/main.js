import './js/events';
import { initHeroSwiper } from './js/hero.js';
import { openNavbar, closeNavbar } from './js/handlers';
import { handleScreenChange } from './js/helpers';
import { navbarBtn, navbarCloseBtn, mediaQuery } from './js/refs';
import './js/books';
import { refs } from './js/refs.js';
import {
  onAddBookClick,
  onBackdropClick,
  onBookClick,
  onBookCountInput,
  onBookMinusClick,
  onBookModalCloseBtnClick,
  onBookPlusClick,
  onBuyBookClick,
} from './js/handlers.js';

function initAfterLoad() {
  const slider = document.querySelector('.swiper-hero');
  if (slider) {
    initHeroSwiper();
  } else {
    setTimeout(initAfterLoad, 50);
  }
}

document.addEventListener('DOMContentLoaded', initAfterLoad);

handleScreenChange(mediaQuery);
mediaQuery.addEventListener('change', handleScreenChange);

navbarBtn.addEventListener('click', openNavbar);
navbarCloseBtn.addEventListener('click', closeNavbar);
// navbarList.addEventListener("click", handleNavigation);

refs.booksList.addEventListener('click', onBookClick);

refs.backdrop.addEventListener('click', e => {
  e.target.closest('.modal-close-btn') && onBookModalCloseBtnClick(e);
  e.target.closest('.backdrop') && onBackdropClick(e);
  e.target.closest('.book-modal-btn-plus') && onBookPlusClick(e);
  e.target.closest('.book-modal-btn-minus') && onBookMinusClick(e);
  e.target.closest('.book-modal-add-btn') && onAddBookClick(e);
  e.target.closest('.book-modal-buy-btn') && onBuyBookClick(e);
});

refs.backdrop.addEventListener('input', e => {
  e.target.closest('.book-count') && onBookCountInput(e);
});
