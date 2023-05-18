var swiper = new Swiper(".infographicCont", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
            slidesPerView: 2,
                breakpoints: { 320: { slidesPerView: 1, spaceBetween: 10 },   1200: { slidesPerView: 2},600:{slidesPerView: 2} },


         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



var swiper = new Swiper(".categoryCont", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
            slidesPerView: 6,
                breakpoints: { 320: { slidesPerView: 2, spaceBetween: 10 },   1200: { slidesPerView: 4},600:{slidesPerView: 2},767:{slidesPerView: 3} },


      });

