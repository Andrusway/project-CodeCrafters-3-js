import { bookModalRefs, refs } from './refs.js';
import { closeModalEscEvent } from './handlers.js';

export function openModal() {
  bookModalRefs.backdrop.classList.add('is-open');
  refs.body.classList.add('no-scroll');
  document.addEventListener('keydown', closeModalEscEvent);
}

export function closeModal() {
  bookModalRefs.backdrop.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');
  document.removeEventListener('keydown', closeModalEscEvent);
}