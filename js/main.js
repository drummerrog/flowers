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
  $(document).ready(function () {
    $(".minus-btn").click(function (e) {
      e.preventDefault();
      var $this = $(this);
      var input = $("#counter");
      var value = parseInt(input.val());
      if (value > 1) {
        value = value - 1;
      } else {
        value = 1;
      }
      input.val(value);
    });

    $(".plus-btn").click(function (e) {
      e.preventDefault();
      var $this = $(this);
      var input = $("#counter");
      var value = parseInt(input.val());
      if (value < 100) {
        value = value + 1;
      } else {
        value = 100;
      }
      input.val(value);
    });
  });

  var more = document.querySelector(".more");
  var open = document.querySelector(".open");

  more.style.display = "none";

  open.addEventListener("click", function () {
    if (more.style.display == "none") more.style.display = "block";
    else more.style.display = "none";
  });
});
