
var swiper = new Swiper(".infographicCont", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
            slidesPerView: 2,
                breakpoints: { 320: { slidesPerView: 1, spaceBetween: 10 },   1200: { slidesPerView: 2} },


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
                breakpoints: { 320: { slidesPerView: 2, spaceBetween: 10 },   1200: { slidesPerView: 4} },


      });

$(window).scroll(function() {
    var $height = $(window).scrollTop();
  if($height > 5) {
        $('.header-wrapper').addClass('sticky');
    } else {
        $('.header-wrapper').removeClass('sticky');
    }


    if($(".header-wrapper").hasClass("sticky")){
        $('.menuNews').addClass('d-none');
    }else{
         $('.menuNews').removeClass('d-none');
       
    }
});


  $(".footerWidgetColum .titleWidget").click(function () {
        $(this).parent().toggleClass("active");
    });


  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  //alert('mobile welcome ');
}


// show slide news left 
jQuery(window).scroll(function() {
    var $height = jQuery(window).scrollTop();
  if($height > 2300) {
        console.log("show");
        jQuery(".slide-top").addClass("active");
    } else {
        jQuery(".slide-top").removeClass("active");
    }


});
