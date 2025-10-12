import { openNavbar, closeNavbar} from "./js/handlers";
import { handleScreenChange } from "./js/helpers";
import { navbarBtn, navbarCloseBtn, mediaQuery } from "./js/refs"




handleScreenChange(mediaQuery)
mediaQuery.addEventListener("change", handleScreenChange)

navbarBtn.addEventListener("click", openNavbar);
navbarCloseBtn.addEventListener("click", closeNavbar);
// navbarList.addEventListener("click", handleNavigation); 