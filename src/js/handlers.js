import { closeModal, openModal } from './modal.js';
import { renderBookModal } from './render-function.js';
import { getBook } from './products-api.js';
import { bookModalRefs } from './refs.js';
import { showInfoToast, showSuccessToast } from './helpers.js';

let booksSelected = 1;

export function closeModalEscEvent(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

export async function onBookClick(event) {
  openModal();
  const bookId = event.target.dataset.id;
  renderBookModal(await getBook(bookId));
}

export function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

export function onBookModalCloseBtnClick() {
  closeModal();
}

export function onBookPlusClick() {
  bookModalRefs.bookCountInput.value = ++booksSelected;
}

export function onBookMinusClick() {
  if (booksSelected > 1) {
    bookModalRefs.bookCountInput.value = --booksSelected;
  }
}

export function onAddBookClick() {
  const books = booksSelected > 1 ? `${booksSelected} books` : '1 book';
  closeModal();
  showInfoToast(`Added to shopping cart ${books}`);
}

export function onBuyBookClick(event) {
  event.preventDefault();
  closeModal();
  showSuccessToast('Дякуємо за покупку');
}

export function onBookCountInput(event) {
  let value = Number(event.target.value);
  if (value < 1) event.target.value = 1;
  if (value > 99) event.target.value = 99;
}