//console.log(text);

 let params = {
     active: true,
     currentWindow: true
 };
//
// chrome.tabs.query(params, gotTabs);
// function gotTabs(tabs){
//   var msg = document.getElementById('getName').value;
//   chrome.tabs.sendMessage(tabs[0].id, msg);
// }

// chrome.tabs.query({active:true,currentWindow:true}, function(tab) {
//   chrome.tabs.sendMessage(tab[0].id, {stuff:"test"});
// });

document.getElementById('getName').addEventListener('keypress', function(){

  chrome.tabs.query(params, gotTabs);
  function gotTabs(tabs){
        console.log(tabs);
        var msg = document.getElementById('getName').value;
        chrome.tabs.sendMessage(tabs[0].id, msg);
  }

});


//});
