// перенесла з констанс та відповідно перейменувала
export const body = document.body;
export const navbarBtn = document.querySelector('.navbar-btn');
export const navbarCloseBtn = document.querySelector('.navbar-close-btn');
export const navbarList = document.querySelector('ul.navbar');
export const mediaQuery = window.matchMedia('(max-width:767px)');

export const refs = {
  backdrop: document.querySelector('.backdrop'),
  get bookModalContent() {
    return document.querySelector('.book-modal-content');
  },
  get bookModalCountInput() {
    return document.querySelector('.book-count');
  },
  booksList: document.querySelector('.books-list'),
};
