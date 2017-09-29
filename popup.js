function doContent(){
    chrome.tabs.executeScript(null, {file: "content.js"});
};

function doTarget(){
    chrome.tabs.executeScript(null, {file: "content2.js"});
};

document.getElementById("Source").onclick = doContent;
document.getElementById("Target").onclick = doTarget;