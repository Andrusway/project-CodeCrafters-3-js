export const handleSwiperInit = swiper => {
  swiper.navigation.prevEl.disabled = swiper.isBeginning;
  swiper.navigation.nextEl.disabled = swiper.isEnd;
};

export const handleSlideChange = swiper => {
  swiper.navigation.prevEl.disabled = swiper.isBeginning;
  swiper.navigation.nextEl.disabled = swiper.isEnd;
};

export const handleReachBeginning = swiper => {
  swiper.navigation.prevEl.disabled = true;
};

export const handleFromEdge = swiper => {
  swiper.navigation.prevEl.disabled = false;
  swiper.navigation.nextEl.disabled = false;
};

export const handleReachEnd = swiper => {
  swiper.navigation.nextEl.disabled = true;
};

export const handleFeedbackButtonEvents = () => {
  document.querySelectorAll('.feedbacks-btn').forEach(btn => {
    btn.addEventListener('mouseup', e => e.currentTarget.blur());
    btn.addEventListener('mouseleave', e => e.currentTarget.blur());
  });
};
