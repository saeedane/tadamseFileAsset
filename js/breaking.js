	 jQuery(".close_news").click(function () {
            jQuery(this).parent(".newsConten").addClass("d-none"), localStorage.setItem("close_news", !0);
        });
        
        if(localStorage.getItem("close_news") == 'true' ){
           jQuery(".breakingBox").addClass("d-none");
        }else{
            jQuery(".breakingBox").removeClass("d-none");
   
        }
	   