const search = document.querySelector(".search");
const searchInput = search.querySelector("input");

search.addEventListener("click", function () {
  searchInput.focus();
});

searchInput.addEventListener("focus", function () {
  search.classList.add("focused");
  searchInput.setAttribute("placeholder", "통합검색");
});

searchInput.addEventListener("blur", function () {
  search.classList.remove("focused");
  searchInput.setAttribute("placeholder", "");
});

const badge = document.querySelector("header .badges");
const toTop = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  // _.throttle(함수, 시간)
  _.throttle(function () {
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badge, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 위로 가는 버튼 보이기
      gsap.to(toTop, 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      gsap.to(badge, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 위로 가는 버튼 숨기기
      gsap.to(toTop, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTop.addEventListener("click", function () {
  gsap.to(window, 0.3, {
    scrollTo: 0,
  });
});

const fades = document.querySelectorAll(".visual .fade-in");
fades.forEach(function (fade, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fade, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 밑의 번호 눌러서 움직임 가능 기능
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotion = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = true;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotion.classList.add("hide");
  } else {
    // 보임 처리
    promotion.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, moving) {
  gsap.to(selector, random(1.5, 5), {
    y: moving,
    repeat: Infinity,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spys = document.querySelectorAll("section.scroll-spy");
spys.forEach(function (spy) {
  new ScrollMagic.Scene({
    triggerElement: spy, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부를 감시
  })
    .setClassToggle(spy, "show")
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
