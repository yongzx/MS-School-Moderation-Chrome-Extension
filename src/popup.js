function getAddress(){
    chrome.tabs.executeScript({file: "getAddressOnClick.js"});
};

function pasteAddress(){
    chrome.tabs.executeScript({file: "pasteAddressOnClick.js"});
};

document.getElementById("getAddress").addEventListener('click', getAddress);
document.getElementById("pasteAddress").addEventListener('click', pasteAddress);