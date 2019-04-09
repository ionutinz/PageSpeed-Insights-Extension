var currentURL;



chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
function(tabs){
getCurrentURL(tabs[0].url);
});

function getCurrentURL(tab){
    currentURL = tab;
 }

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
      // read changeInfo data and do something with it (like read the url)
      if (changeInfo.url) {
        changeInfo.url = getCurrentURL(changeInfo.url);
      }
    }
  );
 



// function renderUrl() {
//     document.getElementById('thisUrl').innerHTML = currentURL;
// }

// document.addEventListener('DOMContentLoaded', function() {
   
   
//     document.getElementById('thisUrl').innerHTML = currentURL;
// });

chrome.browserAction.onClicked.addListener(function(activeTab)
{
   
    // var newURL = `https://developers.google.com/speed/pagespeed/insights/?hl=ro&url=${currentURL}&tab=desktop`;
   var newURL = `http://TESTTTT.INZ/${currentURL}`;  
    chrome.tabs.create({ url: newURL });
});