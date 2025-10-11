import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/feedbacks.css';

import { refs } from './refs.js';
import {
  handleSwiperInit,
  handleSlideChange,
  handleReachBeginning,
  handleFromEdge,
  handleReachEnd,
  handleFeedbackButtonEvents,
} from './handlers.js';

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
      init: handleSwiperInit,
      slideChange: handleSlideChange,
      reachBeginning: handleReachBeginning,
      fromEdge: handleFromEdge,
      reachEnd: handleReachEnd,
    },
  });

  handleFeedbackButtonEvents();

  return swiper;
};
