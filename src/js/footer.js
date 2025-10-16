import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const footerForm = document.querySelector('.footer-form');

footerForm.addEventListener('submit', onSignUpButton);

function onSignUpButton(event) {
  event.preventDefault();
  iziToast.show({
    color: 'green',
    message: `You have successfully registered!`,
    position: 'topRight',
  });
  event.target.reset();
}
