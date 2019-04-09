// var currentURL;

// chrome.tabs.query({'active': true, currentWindow:true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
// function(tabs){
// 	getCurrentURL(tabs[0].url);
// });

// function getCurrentURL(tab){
// 	currentURL = tab;
// }


// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('thisUrl').innerHTML = currentURL;
// });




// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('checkPage');
//     checkPageButton.addEventListener('click', function() {
  
//       console.log('teste');
//       console.log(currentURL);
     
//     }, false);
//   }, false);

// document.getElementById('checkPage').addEventListener("click", showUrl);




document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("checkPage").addEventListener("click", showUrl)
});


function showUrl() {
    document.getElementById('thisUrl').innerHTML = currentURL;
}


