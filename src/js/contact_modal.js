import { stopScroll } from './helpers';

// '📖', '📚', '📘', '📙', '📕'ОТРРИМУЄМО ЕЛЕМЕНТИ'📖', '📚', '📘', '📙', '📕'

const contactsModal = document.getElementById('modal');
const contactsModalBackdrop = document.getElementById('backdrop');
const contactsCloseBtn = document.getElementById('closeBtn');
const contactsEventTitle = document.getElementById('eventTitle');
const contactsForm = document.getElementById('registerForm');

let selectedEventName = '';

// '📖', '📚', '📘', '📙', '📕'ВіДКРИВАННЯ МОДАЛЬНОГО ВІКНА З ПІДТЯГУВАННЯМ НАЗВИ ПОДІЇ '📖', '📚', '📘', '📙', '📕'

export function openContactsModal(eventName) {
  selectedEventName = eventName;
  contactsEventTitle.textContent = selectedEventName;
  contactsModal.classList.remove('contacts-hidden');
  contactsModalBackdrop.classList.remove('contacts-hidden');
  stopScroll();
  gsap.fromTo(
    contactsModal,
    { scale: 0.4, opacity: 0, y: -20 },
    { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
  );
}
// '📖', '📚', '📘', '📙', '📕'ЗАКРИВАННЯ МОДАЛЬНОГО ВІКНА'📖', '📚', '📘', '📙', '📕'

function closeContactsModal() {
  gsap.to(contactsModal, {
    scale: 0.4,
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power2.in',

    onComplete: () => {
      contactsModal.classList.add('contacts-hidden');
      contactsModalBackdrop.classList.add('contacts-hidden');
      stopScroll();
      contactsForm.reset();
    },
  });
}

contactsCloseBtn.addEventListener('click', closeContactsModal);
contactsModalBackdrop.addEventListener('click', closeContactsModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !contactsModal.classList.contains('hidden')) {
    closeContactsModal();
  }
});

//'📖', '📚', '📘', '📙', '📕'ФУНКЦІЯ ФЕЙЕРВЕРКА КОНФЕТТІ'📖', '📚', '📘', '📙', '📕'

function launchFireworks() {
  const duration = 2500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 8,
      angle: 60,
      spread: 100,
      origin: { x: 0 },
      zIndex: 19000,
      colors: ['#E15D05', '#FFD700', '#FF9F1C', '#B000FF', '#00C4B3'],
    });
    confetti({
      particleCount: 8,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
      zIndex: 19000,
      colors: ['#E15D05', '#FFD700', '#FF9F1C', '#B000FF', '#00C4B3'],
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// '📖', '📚', '📘', '📙', '📕'ФУНКЦІЯ ФЕЙЕРВЕРКА КНИГ '📖', '📚', '📘', '📙', '📕'

// Функція фейерверка з кнопки
function buttonBookFirework(originX, originY, count = 10) {
  const bookEmojis = ['📖', '📚', '📘', '📙', '📕'];
  const colors = ['#E15D05', '#FFD700', '#FF9F1C', '#B000FF', '#00C4B3'];

  for (let i = 0; i < count; i++) {
    const book = document.createElement('span');
    book.textContent =
      bookEmojis[Math.floor(Math.random() * bookEmojis.length)];
    book.style.position = 'fixed';
    book.style.left = originX + 'px';
    book.style.top = originY + 'px';
    const size = Math.random() * 28 + 24;
    book.style.fontSize = size + 'px';
    book.style.opacity = Math.random() * 0.7 + 0.3;
    book.style.color = colors[Math.floor(Math.random() * colors.length)];
    book.style.zIndex = 19000;
    book.style.textShadow = '1px 1px 4px rgba(0,0,0,0.4)';
    book.style.transformOrigin = 'center';

    document.body.appendChild(book);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 250 + 100;

    // '📖', '📚', '📘', '📙', '📕'Виліт з кружінням '📖', '📚', '📘', '📙', '📕'

    gsap.to(book, {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 150,
      rotationX: Math.random() * 360,
      rotationY: Math.random() * 360,
      rotation: Math.random() * 720,
      scale: 1 + Math.random() * 0.5,
      duration: 0.8 + Math.random() * 0.5,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(book, {
          y: `+=${Math.random() * 30 - 15}`,
          x: `+=${Math.random() * 30 - 15}`,
          rotation: `+=${Math.random() * 180 - 90}`,
          rotationX: `+=${Math.random() * 180 - 90}`,
          rotationY: `+=${Math.random() * 180 - 90}`,
          duration: 0.6 + Math.random() * 0.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            // '📖', '📚', '📘', '📙', '📕'Падіння вниз'📖', '📚', '📘', '📙', '📕'
            gsap.to(book, {
              y: window.innerHeight - originY + 200,
              x: `+=${(Math.random() - 0.5) * 200}`,
              rotationX: Math.random() * 360,
              rotationY: Math.random() * 360,
              rotation: Math.random() * 720,
              scale: 0.8 + Math.random() * 0.4,
              opacity: 0,
              duration: 2 + Math.random(),
              ease: 'power2.in',
              onComplete: () => book.remove(),
            });
          },
        });
      },
    });
  }
}

//'📖', '📚', '📘', '📙', '📕' ПОДІЯ ФОРМИ'📖', '📚', '📘', '📙', '📕'

contactsForm.addEventListener('submit', e => {
  e.preventDefault();

  const nameInput = contactsForm.querySelector('input[name="name"]');
  const emailInput = contactsForm.querySelector('input[name="email"]');

  const nameError = nameInput.parentElement.querySelector('.error-message');
  const emailError = emailInput.parentElement.querySelector('.error-message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Скидаємо попередні помилки
  [nameInput, emailInput].forEach(input => input.classList.remove('error'));
  [nameError, emailError].forEach(msg => {
    msg.textContent = '';
    msg.style.display = 'none';
  });

  let hasError = false;

  // Перевірка поля "Name
  if (!name) {
    nameInput.classList.add('error');
    nameError.textContent = 'Please enter your name';
    nameError.style.display = 'block';
    hasError = true;
  }
  // Перевірка поля "Email"
  if (!email) {
    emailInput.classList.add('error');
    emailError.textContent = 'Please enter your email';
    emailError.style.display = 'block';
    hasError = true;
  }

  if (email && !email.includes('@')) {
    emailInput.classList.add('error');
    emailError.textContent = 'Email must contain "@"';
    emailError.style.display = 'block';
    hasError = true;
  }

  // Якщо є помилки — показуємо повідомлення і зупиняємо відправку
  if (hasError) {
    Swal.fire({
      title: 'Oops!',
      text: 'Please fill in the required fields: Name and Email!',
      icon: 'warning',
      confirmButtonText: 'OK',
      confirmButtonColor: '#e15d05',
    });
    return;
  }

  // Якщо все добре — успіх
  const rect = e.submitter.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  Swal.fire({
    title: 'SUCCESS!',
    html: `You have registered for: <b>${selectedEventName}</b>`,
    icon: 'success',
    confirmButtonText: 'Great!',
    confirmButtonColor: '#e15d05',
    didOpen: () => {
      buttonBookFirework(originX, originY, 11);
      launchFireworks();
    },
  });

  contactsForm.reset();

  // Скидаємо рамку та підказки
  [nameInput, emailInput].forEach(input => input.classList.remove('error'));
  [nameError, emailError].forEach(msg => {
    msg.textContent = '';
    msg.style.display = 'none';
  });

  closeContactsModal();
});

// Видалення error під час введення тексту
contactsForm.querySelectorAll('input').forEach(input => {
  const errorMsg = input.parentElement.querySelector('.error-message');
  input.addEventListener('input', () => {
    input.classList.remove('error');
    errorMsg.textContent = '';
    errorMsg.style.display = 'none';
  });
});
