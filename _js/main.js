if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const fadeEls = document.querySelectorAll("#mainVisual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.6,
    opacity: 1,
  });
});
// mainVisual

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.7,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
// section-animation

// $('.counter').counterUp({
//   delay: 10,
//   time: 1000
// });
// cumulativeList

$(".roofSell1").vTicker("init", {
  speed: 1000,
  pause: 1000,
  showItems: 5,
  height: 285,
  padding: 10,
});

$(".roofSell2").vTicker("init", {
  speed: 1000,
  pause: 1000,
  showItems: 5,
  height: 285,
  padding: 10,
});
// registerList

swiper = new Swiper("#banner .swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
});
// banner

$("#carList").each(function () {
  var tabBtn = $(".carBtn > li");
  var tabCon = $(".carContent > ul");

  tabCon.eq(0).siblings().css({
    display: "none",
  });

  tabBtn.on("click", function (e) {
    e.preventDefault();

    var target = $(this);
    var index = target.index();

    tabBtn.removeClass("active");
    target.addClass("active");
    tabCon.css({
      display: "none",
    });
    tabCon.eq(index).css({
      display: "block",
    });
  });
});
// carList

const toTopEl = document.querySelector(".topBtn");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY == 0) {
      gsap.to(".topBtn", 0.2, {
        x: 100,
      });
    } else {
      gsap.to(".topBtn", 0.2, {
        x: 0,
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
// topBtn

$(".carContent ul li .btnArea .btn").on("click", function () {
  $('input[name="input[carName]"]').val(
    $(this).parents("li").find("h5").text()
  );
  $("html, body").animate(
    {
      scrollTop: $("#counForm").offset().top,
    },
    300
  );
});
// counTop
