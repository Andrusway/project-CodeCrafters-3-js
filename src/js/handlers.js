
import { stopScroll } from "./helpers";
import { navbarBtn,navbarCloseBtn,navbarList, } from "./refs";

export function openNavbar() {
  if (!navbarList.classList.contains("is-visible")) {
    navbarList.classList.add("is-visible");
    navbarBtn.classList.remove("is-visible");
    navbarCloseBtn.classList.toggle("is-visible");
    stopScroll()
    return;
  }
}

export function closeNavbar() {
  if (navbarList.classList.contains("is-visible")) {
    navbarList.classList.remove("is-visible");
    navbarBtn.classList.add("is-visible");
    navbarCloseBtn.classList.toggle("is-visible");
stopScroll()
    return;
  }
}


// функція пеерходу на сторінку при кліку на лінк навбару 
// та його закриття
export function handleNavigation(event) {
  const link = event.target.closest('a');

  if (!link) return;

  const targetId = link.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({behavior: "smooth"})
  }

  closeNavbar()
  
  

}