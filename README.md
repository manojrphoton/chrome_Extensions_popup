# chrome_Extensions_popup


Depending on how you are injecting the content script you can do it different ways. First if you are using match patterns and injecting via the manifest and you need the data based on some event in the  content script then you will want to do something like this:

Content Script

chrome.extension.sendMessage({text:"getStuff"},function(reponse){
  //This is where the stuff you want from the background page will be
  if(reponse.stuff == "test")
    alert("Test received");
});
Background.js

chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  if(message.text == "getStuff")
    sendResponse({stuff:"test"}); //This would be where you send your stuff
});
If you are doing programmatic injection and you have the data at the time you are injecting, then something like this would work. I am assuming that you already know how to get the tab you want to inject into:

Background.js

//given tab is the tab ID you already have
chrome.tabs.executeScript(tab,{file:"contentScript.js"},function(){
  chrome.tabs.sendMessage(tab, {stuff:"test"});
});
contentScript.js

chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  //This is where the stuff you want from the background page will be
  if(message.stuff == "test")
    alert("Test received");
});
If you need to send data from a popup to a content script you already injected then you could do something like this:

Popup.js

chrome.tabs.query({active:true,currentWindow:true}, function(tab) {
  chrome.tabs.sendMessage(tab[0].id, {stuff:"test"});
});
contentScript.js

chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  //This is where the stuff you want from the background page will be
  if(message.stuff == "test")
    alert("Test received");
});
This will work regardless of how you injected the script, as long as you have the desired tab selected.
