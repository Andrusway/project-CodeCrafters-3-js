// **************ОТРИМУЄМО ЕЛЕМЕНТИ*****************

const modal = document.getElementById('modal');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.getElementById('closeBtn');
const eventTitle = document.getElementById('eventTitle');
const eventList = document.querySelector('.event-list');
const form = document.getElementById('registerForm');

let selectedEventName = '';

// **********************ОБРОБНИКИ**********************

// Делегування кліків на кнопку Register
eventList.addEventListener('click', e => {
  const button = e.target.closest('.register-btn');
  if (!button) return;

  const eventCard = button.closest('.event-card');
  if (eventCard) {
    openModal(eventCard);
  }
});

// *********************ВіДКРИВАННЯ МОДАЛЬНОГО ВІКНА***********************

function openModal(eventCard) {
  selectedEventName = eventCard.querySelector('h3').textContent.trim();

  //підставляємо текст обраного заходу в тег р мадального вікна
  eventTitle.textContent = selectedEventName;

  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
  document.body.classList.add('modal-open');

  gsap.fromTo(
    modal,
    { scale: 0, rotationX: -90, opacity: 0 },
    {
      scale: 1,
      rotationX: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power4.out',
    }
  );
}

// *****************ЗАКРИВАННЯ МОДАЛЬНОГО ВІКНА*************************

function closeModal() {
  gsap.to(modal, {
    scale: 0,
    rotationX: 90,
    opacity: 0,
    duration: 0.5,
    ease: 'power4.in',

    onComplete: () => {
      modal.classList.add('hidden');
      backdrop.classList.add('hidden');
      document.body.classList.remove('modal-open');

      form.reset();
    },
  });
}
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// **********************ПОДІЯ ФОРМИ**********************
form.addEventListener('submit', e => {
  // блокуємо пезезагрузку фоми
  e.preventDefault();

  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();

  if (!name || !email) {
    Swal.fire({
      title: 'Oops!',
      text: 'Please fill in the required fields: Name and Email.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    return;
  }

  Swal.fire({
    title: 'Success!',
    text: `You have registered for: ${selectedEventName}`,
    icon: 'success',
    confirmButtonText: 'OK',
  });
  form.reset();
  closeModal();
});
