
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
                breakpoints: { 320: { slidesPerView: 1, spaceBetween: 10 },   1200: { slidesPerView: 4} },


      });

jQuery(window).scroll(function() {
    var $height = jQuery(window).scrollTop();
  if($height > 5) {
        jQuery('.header-wrapper').addClass('sticky');
        jQuery('.shart-contianer').addClass('sticky');

    } else {
        jQuery('.header-wrapper').removeClass('sticky');
        jQuery('.shart-contianer').removeClass('sticky');

    }


    if(jQuery(".header-wrapper").hasClass("sticky") || jQuery(".shart-contianer").hasClass("sticky") ){
        jQuery('.menuNews').addClass('d-none');
        jQuery('.shart-contianer').addClass('d-none');

    }else{
         jQuery('.menuNews').removeClass('d-none');
         jQuery('.shart-contianer').removeClass('d-none');

    }



});


  jQuery(".footerWidgetColum .titleWidget").click(function () {
        jQuery(this).parent().toggleClass("active");
    });


   jQuery(".menu_bar").click(function(){
    jQuery(".menu_side").addClass("active");
    jQuery("body").addClass("oveflow");
  });

  jQuery(".close_menu").click(function(){
    jQuery(".menu_side").removeClass("active");
    jQuery("body").removeClass("oveflow");
  });

  jQuery(".close_news").click(function(){
    jQuery(this).parent(".menu_side").fadeOut();
  });


  

/*
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  alert('mobile welcome ');
}

*/

  var swiper = new Swiper(".NewsSlider", {
     autoplay: {
       delay: 5000,
     },
    direction: "vertical",
    loop: true,
    slidesPerView: 1,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });