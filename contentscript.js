  console.log("Loaded extension");
  
  //var el = jQuery('.attachmentName').first();      // Update Status
  //el.bind("click", initiateSexyTime);

  //function initiateSexyTime() {
  var el = jQuery('[name=xhpc_message]');
  el.on('keydown', processText);
  //}
  // Ajax this shit to our server!

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
      jQuery('#fbcmd-notice').css('position', 'absolute');
      jQuery('#fbcmd-notice').css('top', '80px');
      jQuery('#fbcmd-notice').css('width', '100%');
      jQuery('#fbcmd-notice').css('line-height', '120px');
      jQuery('#fbcmd-notice').css({'margin': 'auto'});
      jQuery('#fbcmd-notice').css({'color': 'black', 'font-size': '1.6em'});
      jQuery('#fbcmd-notice').css('background-color', 'rgba(175,175,175,0.8)');
      jQuery('#fbcmd-notice').css('text-align', 'center');
      jQuery('#fbcmd-notice').html('Processing ... Please Wait ...');
      jQuery('#fbcmd-notice').fadeIn('fast')
      chrome.extension.sendRequest({user: user, value: value}, function(response) {
        console.log(response);
        jQuery('#fbcmd-notice').html('Success! Click <a href="' +
                              'http://www.facebook.com/me">here</a> to continue.');
        jQuery('#fbcmd-notice').css({'color': 'green', 'font-size': '1.6em'});
        jQuery('#fbcmd-notice').css('background-color', 'rgba(51,255,153,0.8)');
        setTimeout("jQuery('#fbcmd-notice').fadeOut('fast')", 9000);


      });
      console.log(jQuery('[name="xhpc_message"]').val());
    }
    
  }
