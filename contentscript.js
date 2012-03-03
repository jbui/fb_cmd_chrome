  console.log("Loaded extension");

  jQuery('[name=xhpc_message]').on('focus', function(e) {
    jQuery(e.target).on('keydown', self.processText);
  });
  jQuery('[name=xhpc_message]').on('blur', function(e) {
    jQuery(e.target).off('keydown', self.processText);
  });

  function processText(e) {
    console.log("Process text");
    if (e.keyCode == 192) {
      e.preventDefault();

      var user = jQuery('[name=targetid]').val();

      console.log(user);
      var el = jQuery('[name=xhpc_message]');
      var value = el[0].value;
      var post_url = 'http://www.google.com';

      jQuery('body').append('<div id="fbcmd-notice"></div>');
      jQuery('#fbcmd-notice').hide();
      jQuery('#fbcmd-notice').css('z-index', '150000');
      jQuery('#fbcmd-notice').css('position', 'fixed');
      jQuery('#fbcmd-notice').css('top', '60px');
      jQuery('#fbcmd-notice').css('left', '60px');
      jQuery('#fbcmd-notice').css('width', '500px');
      jQuery('#fbcmd-notice').css('line-height', '80px');
      jQuery('#fbcmd-notice').css({'color': 'black', 'font-size': '1.6em'});
      jQuery('#fbcmd-notice').css('background-color', 'rgba(175,175,175,0.8)');
      jQuery('#fbcmd-notice').css('border', '1px solid black');
      jQuery('#fbcmd-notice').css('text-align', 'center');
      jQuery('#fbcmd-notice').html('Processing...');
      jQuery('#fbcmd-notice').fadeIn('fast')
      chrome.extension.sendRequest({user: user, value: value}, function(response) {
        console.log(response);
        jQuery('#fbcmd-notice').html('Done!');
        jQuery('#fbcmd-notice').css({'color': 'green', 'font-size': '1.6em'});
        jQuery('#fbcmd-notice').css('border', '1px solid green');
        jQuery('#fbcmd-notice').css('background-color', 'rgba(51,255,153,0.8)');
        setTimeout("jQuery('#fbcmd-notice').fadeOut('fast')", 3000);


      });
      console.log(jQuery('[name="xhpc_message"]').val());
    }
    
  }
