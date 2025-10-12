import { body, refs } from './refs.js';
import { closeModalEscEvent } from './handlers.js';

export function openModal() {
  refs.backdrop.classList.add('is-open');
  body.classList.add('no-scroll');
  document.addEventListener('keydown', closeModalEscEvent);
}

export function closeModal() {
  refs.backdrop.classList.remove('is-open');
  body.classList.remove('no-scroll');
  document.removeEventListener('keydown', closeModalEscEvent);
}