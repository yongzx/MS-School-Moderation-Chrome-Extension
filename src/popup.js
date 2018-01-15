function getAddress(){
    chrome.tabs.executeScript({file: "getAddressOnClick.js"});
};

function pasteAddress(){
    chrome.tabs.executeScript({file: "pasteAddressOnClick.js"});
};

function addDuplicates(){
    chrome.tabs.executeScript({file: "addDuplicatesOnClick.js"});
}

document.getElementById("getAddress").addEventListener('click', getAddress);
document.getElementById("pasteAddress").addEventListener('click', pasteAddress);
document.getElementById("addDuplicates").addEventListener('click', addDuplicates);
