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
