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
