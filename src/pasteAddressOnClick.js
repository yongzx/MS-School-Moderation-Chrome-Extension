$.get( "https://www.minerva.kgi.edu/admin/schools_moderation?*", function(data){
    var storedAddress = chrome.storage.local.get('Storage', function(items){
        //object = JSON.stringify(items);
        console.log(typeof(items.Storage.Address));
        console.log(document.getElementsByName('address'));
        document.getElementsByName('address')[0].value = items.Storage.Address;
        document.getElementsByName('city')[0].value = items.Storage.City;
        document.getElementsByName('state')[0].value = items.Storage.State;
        document.getElementsByName('postal')[0].value = items.Storage.Postal;
        console.log(document.getElementsByName("add_to").value);
//        console.log(items);

    });
});
