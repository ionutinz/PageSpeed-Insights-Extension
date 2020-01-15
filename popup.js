document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("checkPage").addEventListener("click", showUrl)
});


function showUrl() {
    document.getElementById('thisUrl').innerHTML = currentURL;
}


