
import { NAVBAR_BTN,NAVBAR_LIST,NAVBAR_CLOSE_BTN} from "./constants";

export function openNavbar() {
  if (!NAVBAR_LIST.classList.contains("is-visible")) {
    NAVBAR_LIST.classList.add("is-visible");
    NAVBAR_BTN.classList.remove("is-visible");
    NAVBAR_CLOSE_BTN.classList.toggle("is-visible");
    return;
  }
}

export function closeNavbar() {
  if (NAVBAR_LIST.classList.contains("is-visible")) {
    NAVBAR_LIST.classList.remove("is-visible");
    NAVBAR_BTN.classList.add("is-visible");
    NAVBAR_CLOSE_BTN.classList.toggle("is-visible");

    return;
  }
}