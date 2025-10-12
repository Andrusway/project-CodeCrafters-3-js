import { bookModalRefs, refs } from './refs.js';

export function openModal() {
  bookModalRefs.backdrop.classList.add('is-open');
  refs.body.classList.add('no-scroll');
  document.addEventListener('keydown', addCloseEvent);
}

export function closeModal() {
  bookModalRefs.backdrop.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');
  document.removeEventListener('keydown', addCloseEvent);
}

function addCloseEvent(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
