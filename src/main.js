import './js/events';
import { openNavbar, closeNavbar } from './js/handlers';
import { NAVBAR_BTN, NAVBAR_CLOSE_BTN, NAVBAR_LIST } from './js/constants';

NAVBAR_BTN.addEventListener('click', openNavbar);
NAVBAR_CLOSE_BTN.addEventListener('click', closeNavbar);
