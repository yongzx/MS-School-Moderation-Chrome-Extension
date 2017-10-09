$.get( "https://www.google.com/search?q=*", function( data ) {
    var address = $("span._Xbe").first().text();
    var info = address.split(", ");

    var arr_state_postalcode = info[info.length-1].split(" ");
    var addressObject = {Address: info[0], City: info[1], State: arr_state_postalcode[0], Postal: arr_state_postalcode[1]};
    // console.log(addressObject);

    chrome.storage.local.set({
      'Storage':addressObject
    });
    alert(`Address: ${info[0]} \nCity: ${info[1]} \nState: ${arr_state_postalcode[0]} \nPostal: ${arr_state_postalcode[1]}` + "\nInfo on address stored.");
    console.log(`Address: ${info[0]} \nCity: ${info[1]} \nState: ${arr_state_postalcode[0]} \nPostal: ${arr_state_postalcode[1]}` + "\nInfo on address stored.");
  });
