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
      console.log("Registered enter.");

      var user = jQuery('[name=targetid]').val();

      console.log(user);
      var el = jQuery('[name=xhpc_message]');
      var value = el[0].value;
      var post_url = 'http://www.google.com';

      chrome.extension.sendRequest({user: user, value: value}, function(response) {
        console.log(response);
      });
      console.log(jQuery('[name="xhpc_message"]').val());
    }
    
  }
