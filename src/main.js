import { bookModalRefs, tempRefs } from './js/refs.js';
import { closeModal, openModal } from './js/modal.js';
import { renderBookModal } from './js/render-function.js';
import { getBook } from './js/products-api.js';

bookModalRefs.openBookModalBtn.addEventListener('click', async e => {
  openModal();
  const bookId = e.target.dataset.id;
  renderBookModal(await getBook(bookId));
})

tempRefs.closeModalBtn.addEventListener('click', e => {
  closeModal();
})