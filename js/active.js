 /**
 * ----------------------------------------------
 * Layout mode (dark or light)
 * ----------------------------------------------
 */

// Delete cookie
function deleteCookie(key, path, domain) {
    document.cookie = key +
        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
        (domain ? "; domain=" + domain : "") +
        (path ? "; path=" + path : "");
}

// Set cookie
function setCookie(name, value, expiry = 60 * 24 * 60 * 60 * 1000) {
    let date = new Date();
    date.setTime(date.getTime() + expiry);
    let expires = "; expires=" + date.toUTCString();
    document.cookie = name + '=' + value + expires + "; path=/";
}

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

 let body = jQuery('body');

     jQuery(".dropdown-item").click(function (e) {
              jQuery('.dropdown-item').removeClass("active");
              jQuery(this).addClass("active");


              // Dark mode
    if (body.hasClass('dark-mode')) {
        body.removeClass('dark-mode');
        
        deleteCookie('__dark-mode', '/');
    } else { // Light mode
        body.addClass('dark-mode');

        setCookie('__dark-mode', 'DARK');
    }


         e.stopImmediatePropagation();
    return false;
    });
    
    jQuery(".switch__dark").click(function (e) {
    
    
              // Dark mode
    if (body.hasClass('dark-mode')) {
        body.removeClass('dark-mode');
        
        deleteCookie('__dark-mode', '/');
    } else { // Light mode
        body.addClass('dark-mode');

        setCookie('__dark-mode', 'DARK');
    }
    
    e.stopImmediatePropagation();
    return false;
    });
    
     jQuery(".close_news").click(function () {
        jQuery(this).parent(".newsConten").addClass("d-none");
        setCookie('__close-breaking', 'NEWS',60 * 60 * 6 * 1000);

    });

     jQuery("#saveData").click(function (e) {

     

        let
        let ajax_request = new XMLHttpRequest(),
         email = jQuery('#userEmail').val(),
        username =  jQuery('#userUsername').val(),
        password =    jQuery('#userPassword').val();

       var formData = new FormData();
        formData.append("action", "user_register");
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);

      

     ajax_request.open('POST', frontendajax.ajaxurl, true);
    ajax_request.send(formData);
    
      
                    

    e.stopImmediatePropagation();
    return false;
    
    });  