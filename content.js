$.get( "https://www.google.com/search?q=*", function( data ) {
    var address = $("span._Xbe").first().text();
    var info = address.split(", ");

    var arr_state_postalcode = info[info.length-1].split(" ");
    var info = {Address: info[0], City: info[1], State: arr_state_postalcode[0], Postal: arr_state_postalcode[1]};
    // console.log(info);
    chrome.storage.local.set({
      'Storage':info
    });
    console.log("Info on address stored.");
  });



  
