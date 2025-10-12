import { bookModalRefs, tempRefs } from './refs.js';
import { closeModal, openModal } from './handlers.js';
import { getBook } from './products-api.js';
import { renderBookModal } from './render-function.js';

export function handleBookModal() {
  bookModalRefs.openBookModalBtn.addEventListener('click', async e => {
    openModal();
    const bookId = e.target.dataset.id;
    renderBookModal(await getBook(bookId));
  })

  tempRefs.closeModalBtn.addEventListener('click', e => {
    closeModal();
  })
}