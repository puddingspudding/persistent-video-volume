document.addEventListener('DOMContentLoaded', function() {
    var text = document.getElementById("volume-text");
    var element = document.getElementById("volume");  

    var setLabel = function(volume) {
        text.innerHTML = volume  +'%';
    }  

    element.addEventListener("change", function(e) {
        var volume = e.target.value;
        setLabel(volume);
        chrome.storage.local.set({"fb-volume": volume}, function() {});
    });    

    chrome.storage.local.get("fb-volume", function(data) {
        var volume = data['fb-volume'];
        element.value = volume;
        setLabel(volume);
    });



});
