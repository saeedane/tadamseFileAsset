  var page = 2;
  jQuery('.spinner-border').hide();
  jQuery('#tadamsa_loadmore').on('click',function(e){
  var catID =  jQuery(this).attr('data-cate-id');
  var authorID =  jQuery(this).attr('data-author-id');
  var postType =  jQuery(this).attr('data-post-type');

      e.preventDefault();
      var data = {'action': 'archives_load_more','page': page,'authorID':authorID ,'categoryID' : catID,'postType':postType};
        jQuery('.loading-archive').show();
        jQuery('#tadamsa_loadmore').hide();

      jQuery.post(frontendajax.ajaxurl,data, function(response) {
        if(jQuery.trim(response) != '' ) {
           jQuery('.post-wrapper').append(response);
            jQuery('#tadamsa_loadmore').show();
              jQuery('.loading-archive').hide();

            page++;
         }else{
              jQuery('#tadamsa_loadmore').addClass("disabled");
              jQuery('#tadamsa_loadmore').text('لا يوجد مزيد من أخبار');
              jQuery('#tadamsa_loadmore').show();
              jQuery('.loading-archive').hide();

         }
      });
      
  });

  jQuery('.poll__submit').on('click', function (e) {
    e.preventDefault();
    
    // Set initial state
    let ajax_request = new XMLHttpRequest(),
    formData = new FormData(),
    poll_submit = jQuery(this),
    poll_submit_input = poll_submit.find('input'),
    poll = poll_submit.closest('.poll-info'),
    
    poll_id = poll.data('poll-id'),
    user_id = poll.data('user-id'),
    poll_option = poll.find('[name="poll-options"]:checked'),
    checkbox_option =jQuery('.poll-options'),
    poll_list = poll.find('.poll__list'),
    poll_layout = poll.find('.poll__layout'),
    view_poll  = poll.find('.view_poll'),
    poll_nonce = jQuery("#poll_ajax_nonce_ragister");
    poll_submit_input.attr('disabled', true);
    // Prepare form data
    formData.append('action', 'poll_options_ajax');
    formData.append('poll_id', poll_id);
    formData.append('poll_option', poll_option.val());
    formData.append('nonce', poll_nonce.val());
    
    ajax_request.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            checkbox_option.remove();
            view_poll.remove();

            if (this.responseText === 'Error') {
                // Do nothing
            } else {
                poll_submit.removeClass('d-none');
                poll_list.html(this.responseText);

                  
                
            }
        }
    }
    
    ajax_request.open('POST', frontendajax.ajaxurl, true);
    ajax_request.send(formData);
    
    e.stopImmediatePropagation();
    return false;
        
    
        
      
        
    


                



});


jQuery('.view_poll').on('click', function (e) { 
let
poll_submit = jQuery(this),
poll = poll_submit.closest('.poll-info'),
poll_item = poll.find('.poll-item'),
poll_layout   = poll.find('.poll__layout'),
poll_option =  poll.find('.radio-item');
poll_item.toggleClass('d-block');
poll_option.toggleClass('d-none');
if(poll_item.hasClass('d-block')){
poll_submit.html('اخفاء');
}else{
poll_submit.html('النتيجة');

}

});