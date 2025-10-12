import { bookModalRefs, modalRefs } from './js/refs.js';
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

bookModalRefs.openBookModalBtn.addEventListener('click', onBookClick);

modalRefs.backdrop.addEventListener('click', e => {
  e.target.closest('.modal-close-btn') && onBookModalCloseBtnClick(e);
  e.target.closest('.backdrop') && onBackdropClick(e);
  e.target.closest('.book-modal-btn-plus') && onBookPlusClick(e);
  e.target.closest('.book-modal-btn-minus') && onBookMinusClick(e);
  e.target.closest('.book-modal-add-btn') && onAddBookClick(e);
  e.target.closest('.book-modal-buy-btn') && onBuyBookClick(e);
});

modalRefs.backdrop.addEventListener('input', e => {
  e.target.closest('.book-count') && onBookCountInput(e);
});