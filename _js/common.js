const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY == 0) {
    gsap.to('#to-top', 0.2, {
      x: 100
    });
  } else {
    gsap.to('#to-top', 0.2, {
      x: 0
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});
//to-top