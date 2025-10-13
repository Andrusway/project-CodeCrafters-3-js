import { handleNavigation } from "./handlers";
import { navbarList, body } from "./refs";


// ф-я блокування скролу на боді - додає клас стилів
export function stopScroll() {
    body.classList.toggle("no-scroll")
    
}


// Функції HandleScreenChange та OnNavClick зроблені для того, 
// щоб перехід по секціям в Desktop-і та Tablet-версії відбувався по якорним посиланням, 
// а в мобільній версії відпрацьовула функція HandleNavigation.

// ф-я перевіряє розмір екрану, якщо він відповідає умові(max-width:767px) 
// то ставить слухача події на навбар в іншому разі ні
export function handleScreenChange(e){

    if (e.matches) {
        navbarList.addEventListener("click", onNavClick)
    } else {
        navbarList.removeEventListener("click", onNavClick)
    }
};

// викликає ф-ю навігації моб версії
export function onNavClick(event) {
    handleNavigation(event);
};