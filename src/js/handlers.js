import { getBooksSelected, stopScroll } from './helpers';
import { navbarBtn, navbarCloseBtn, navbarList } from './refs';
import { closeModal, openModal } from './modal.js';
import { renderBookModal } from './render-function.js';
import { getBook } from './products-api.js';
import { refs } from './refs.js';
import { showInfoToast, showSuccessToast } from './helpers.js';

export function openNavbar() {
  if (!navbarList.classList.contains('is-visible')) {
    navbarList.classList.add('is-visible');
    navbarBtn.classList.remove('is-visible');
    navbarCloseBtn.classList.toggle('is-visible');
    stopScroll();
    return;
  }
}

export function closeNavbar() {
  if (navbarList.classList.contains('is-visible')) {
    navbarList.classList.remove('is-visible');
    navbarBtn.classList.add('is-visible');
    navbarCloseBtn.classList.toggle('is-visible');
    stopScroll();
    return;
  }
}

// функція пеерходу на сторінку при кліку на лінк навбару
// та його закриття
export function handleNavigation(event) {
  const link = event.target.closest('a');

  if (!link) return;

  const targetId = link.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  closeNavbar();
}

export function closeModalEscEvent(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

export async function onBookClick(event) {
  const bookBtn = event.target.closest('.books-learn-more-button');

  if (!bookBtn) return;

  const bookId = event.target.closest('.books-item').dataset.id;
  openModal();
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
  refs.bookModalCountInput.value = getBooksSelected() + 1;
}

export function onBookMinusClick() {
  if (getBooksSelected() > 1) {
    refs.bookModalCountInput.value = getBooksSelected() - 1;
  }
}

export function onAddBookClick() {
  let booksSelected = getBooksSelected();

  const message =
    booksSelected > 1
      ? `В кошик додано ${booksSelected} книг`
      : 'В кошик додана 1 книга';
  closeModal();
  showInfoToast(message);
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