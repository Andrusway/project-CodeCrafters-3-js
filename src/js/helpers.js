<<<<<<< HEAD
import { handleNavigation } from './handlers';
import { navbarList, body } from './refs';

// ф-я блокування скролу на боді - додає клас стилів
export function stopScroll() {
  body.classList.toggle('no-scroll');
}

=======
import { handleNavigation } from "./handlers";
import { navbarList, body, refs } from './refs';
import iziToast from 'izitoast';

// ф-я блокування скролу на боді - додає клас стилів
export function stopScroll() {
    body.classList.toggle("no-scroll")

}


>>>>>>> main
// Функції HandleScreenChange та OnNavClick зроблені для того,
// щоб перехід по секціям в Desktop-і та Tablet-версії відбувався по якорним посиланням,
// а в мобільній версії відпрацьовула функція HandleNavigation.

// ф-я перевіряє розмір екрану, якщо він відповідає умові(max-width:767px)
// то ставить слухача події на навбар в іншому разі ні
<<<<<<< HEAD
export function handleScreenChange(e) {
  if (e.matches) {
    navbarList.addEventListener('click', onNavClick);
  } else {
    navbarList.removeEventListener('click', onNavClick);
  }
=======
export function handleScreenChange(e){

    if (e.matches) {
        navbarList.addEventListener("click", onNavClick)
    } else {
        navbarList.removeEventListener("click", onNavClick)
    }
>>>>>>> main
}

// викликає ф-ю навігації моб версії
export function onNavClick(event) {
<<<<<<< HEAD
  handleNavigation(event);
}
=======
    handleNavigation(event);
}

export function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

export function showInfoToast(message) {
  iziToast.info({
    position: 'topRight',
    message: message,
  });
}

export function showSuccessToast(message) {
  iziToast.success({
    position: 'topRight',
    message: message,
  });
}

export function getBooksSelected() {
  return  Number(refs.bookModalCountInput.value);
}
>>>>>>> main
