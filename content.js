console.log('My first extension starts now');

chrome.runtime.onMessage.addListener(gotMessage);

//function gotMessage(message, sender, sendResponse){
function gotMessage(message, sender, sendResponse){
  function sendResponse(response) {
    console.log(response);
          if (port) {
            port.postMessage(response);
            console.log(port);
          }
  }

  let paragraphs = document.getElementsByTagName('p');
  for(elt of paragraphs){
    elt.innerHTML = message;
  }
}

//
// chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
//   //This is where the stuff you want from the background page will be
//   if(message.stuff == "test")
//     alert("Test received");
// });
