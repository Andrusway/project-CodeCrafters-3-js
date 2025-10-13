import { initFeedbacksSwiper } from './js/feedbacks.js';

document.addEventListener('DOMContentLoaded', () => {
  const feedbacksSlider = document.querySelector('.feedbacks-swiper');
  if (feedbacksSlider) {
    initFeedbacksSwiper();
  }
});
