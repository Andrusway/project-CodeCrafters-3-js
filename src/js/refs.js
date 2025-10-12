// перенесла з констанс та відповідно перейменувала
export const body = document.body;
export const navbarBtn = document.querySelector(".navbar-btn");
export const navbarCloseBtn = document.querySelector(".navbar-close-btn");
export const navbarList = document.querySelector("ul.navbar");
export const mediaQuery = window.matchMedia("(max-width:767px)")

//TODO remove
export const refs = {
  body: document.querySelector('body'),
};

export const modalRefs = {
  backdrop: document.querySelector('.backdrop'),
  get closeModalBtn() {
    return document.querySelector('.modal-close-btn');
  },
}

export const bookModalRefs = {
  openBookModalBtn: document.querySelector('.open-book-modal'),
  get bookModalContent() {
    return document.querySelector('.book-modal-content');
  },
  get minusBtn() {
    return document.querySelector('.book-modal-btn-minus');
  },
  get plusBtn() {
    return document.querySelector('.book-modal-btn-plus');
  },
  get bookCountInput() {
    return document.querySelector('.book-count');
  },
  get addBtn() {
    return document.querySelector('.book-modal-add-btn');
  },
  get buyBtn() {
    return document.querySelector('.book-modal-buy-btn');
  },
};