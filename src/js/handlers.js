import { closeModal } from './modal.js';

export function closeModalEscEvent(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
