
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

jQuery(window).scroll(function() {
    var $height = jQuery(window).scrollTop();
  if($height > 5) {
        jQuery('.header-wrapper').addClass('sticky');
    } else {
        jQuery('.header-wrapper').removeClass('sticky');
    }


    if(jQuery(".header-wrapper").hasClass("sticky")){
        jQuery('.menuNews').addClass('d-none');
    }else{
         jQuery('.menuNews').removeClass('d-none');
       
    }
});


  jQuery(".footerWidgetColum .titleWidget").click(function () {
        jQuery(this).parent().toggleClass("active");
    });


  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  //alert('mobile welcome ');
}


// show slide news left 
jQuery(window).scroll(function() {
    var $height = jQuery(window).scrollTop();
  if($height > 2300) {
            jQuery(".slide-top").addClass("active");
    } else {
        jQuery(".slide-top").removeClass("active");
    }


});
