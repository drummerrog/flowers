$(document).ready(function () {
  const flowersSlider = new Swiper(".flowers-slider", {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,

    // Подключаем стрелки
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 2,
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3,
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 6,
      },
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,

    // Подключаем стрелки
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $("#review-1").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "../img/reviews/review-1.jpg",
          opts: {
            caption: "Первый букет",
            thumb: "../img/reviews/review-1.jpg",
          },
        },
        {
          src: "../img/reviews/review-2.jpg",
          opts: {
            caption: "Второй букет",
            thumb: "../img/reviews/review-2.jpg",
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    );
  });
});
