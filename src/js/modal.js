//  Кнопка "Register" з секцiї EVENTS відкриває модальне вікно реєстрації на захід.
// Модальне вікно  містить назву події, на яку відбувається реєстрація

import { openContactsModal } from './contact_modal';

document.querySelectorAll('.register-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Отримуємо назву події
    const eventCard = button.closest('.events-swiper-slide');
    const eventName = eventCard
      .querySelector('.events-item-title')
      .textContent.trim();
    // Відкриваємо модалку з передачею назви
    openContactsModal(eventName);
  });
});

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
