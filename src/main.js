import { bookModalRefs, tempRefs } from './js/refs.js';
import { closeModal, openModal } from './js/handlers.js';
import { getBook } from './js/products-api.js';
import { renderBookModal } from './js/render-function.js';

bookModalRefs.openBookModalBtn.addEventListener('click', async e => {
  openModal();
  const bookId = e.target.dataset.id;
  console.log(await getBook(bookId));  //TODO temporary
  renderBookModal(await getBook(bookId));
})

tempRefs.closeModalBtn.addEventListener('click', e => {
  closeModal();
})

