import {
  stopScroll,
  getBooksSelected,
  showInfoToast,
  showSuccessToast,
  restoreScroll,
} from './helpers';
import {
  navbarBtn,
  navbarCloseBtn,
  navbarList,
  refs,
  arrowNavBtn,
} from './refs';
import { closeModal, openModal } from './modal.js';
import { renderBookModal } from './render-function.js';
import { getBook } from './products-api.js';

// відкриття навбару
export function openNavbar() {
  if (!navbarList.classList.contains('is-visible')) {
    navbarList.classList.add('is-visible');
    navbarBtn.classList.remove('is-visible');
    navbarCloseBtn.classList.toggle('is-visible');
    stopScroll();
  }
}

// закриття навбару
export function closeNavbar() {
  if (navbarList.classList.contains('is-visible')) {
    navbarList.classList.remove('is-visible');
    navbarBtn.classList.add('is-visible');
    navbarCloseBtn.classList.toggle('is-visible');
    restoreScroll();
  }
}

// перехід по якорю + закриття навбару
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

// закриття модалки по Escape
export function closeModalEscEvent(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// відкриття модалки з деталями книги
export async function onBookClick(event) {
  const bookBtn = event.target.closest('.books-learn-more-button');
  if (!bookBtn) return;

  const bookId = event.target.closest('.books-item').dataset.id;
  openModal();
  renderBookModal(await getBook(bookId));
}

// клік по бекдропу
export function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

// закриття модалки по кнопці
export function onBookModalCloseBtnClick() {
  closeModal();
}

// кнопки +/-
export function onBookPlusClick() {
  refs.bookModalCountInput.value = getBooksSelected() + 1;
}

export function onBookMinusClick() {
  if (getBooksSelected() > 1) {
    refs.bookModalCountInput.value = getBooksSelected() - 1;
  }
}

// кнопка "Додати до кошика"
export function onAddBookClick() {
  const booksSelected = getBooksSelected();

  const message =
    booksSelected > 1
      ? `В кошик додано ${booksSelected} книг`
      : 'В кошик додана 1 книга';
  closeModal();
  showInfoToast(message);
}

// кнопка "Купити"
export function onBuyBookClick(event) {
  event.preventDefault();
  closeModal();
  showSuccessToast('Дякуємо за покупку');
}

// контроль кількості введення вручну
export function onBookCountInput(event) {
  let value = Number(event.target.value);
  if (value < 1) event.target.value = 1;
  if (value > 99) event.target.value = 99;
}

// поява стрілки Scroll up
export function madeVisibleArrowBtn() {
  if (window.scrollY > 600) {
    arrowNavBtn.classList.add('is-visible-arrow-btn');
  } else {
    arrowNavBtn.classList.remove('is-visible-arrow-btn');
  }
}

// підняття вгору при натисканні Scroll up
export function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
