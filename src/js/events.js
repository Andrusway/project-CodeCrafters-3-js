import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.events-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  autoHeight: true,
  pagination: {
    el: '.events-swiper-dots',
  },

  navigation: {
    nextEl: '.events-btn-next',
    prevEl: '.events-btn-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
