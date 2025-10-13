import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/feedbacks.css';

export const refs = {
  feedbacksSwiper: document.querySelector('.feedbacks-swiper'),
  feedbacksNextBtn: document.querySelector('.feedbacks-btn-next'),
  feedbacksPrevBtn: document.querySelector('.feedbacks-btn-prev'),
  feedbacksPagination: document.querySelector('.feedbacks-pagination'),
};

export const initFeedbacksSwiper = () => {
  if (!refs.feedbacksSwiper) return;

  const swiper = new Swiper(refs.feedbacksSwiper, {
    modules: [Navigation, Keyboard, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    keyboard: { enabled: true },
    autoHeight: false,
    navigation: {
      nextEl: refs.feedbacksNextBtn,
      prevEl: refs.feedbacksPrevBtn,
    },
    pagination: {
      el: refs.feedbacksPagination,
      clickable: true,
      bulletClass: 'feedbacks-bullet',
      bulletActiveClass: 'feedbacks-bullet-active',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 3 },
    },
    on: {
      init(swiper) {
        swiper.navigation.prevEl.disabled = swiper.isBeginning;
        swiper.navigation.nextEl.disabled = swiper.isEnd;
      },
      slideChange(swiper) {
        swiper.navigation.prevEl.disabled = swiper.isBeginning;
        swiper.navigation.nextEl.disabled = swiper.isEnd;
      },
      reachBeginning(swiper) {
        swiper.navigation.prevEl.disabled = true;
      },
      fromEdge(swiper) {
        swiper.navigation.prevEl.disabled = false;
        swiper.navigation.nextEl.disabled = false;
      },
      reachEnd(swiper) {
        swiper.navigation.nextEl.disabled = true;
      },
    },
  });

  document.querySelectorAll('.feedbacks-btn').forEach(btn => {
    btn.addEventListener('mouseup', e => e.currentTarget.blur());
    btn.addEventListener('mouseleave', e => e.currentTarget.blur());
  });

  return swiper;
};
