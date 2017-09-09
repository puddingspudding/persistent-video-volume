var STORAGE_KEY = "video-volume";

document.addEventListener('DOMContentLoaded', function() {
    var text = document.getElementById("volume-text");
    var element = document.getElementById("volume");  

    var setLabel = function(volume) {
        text.innerHTML = volume + '%';
    }

    element.addEventListener("change", function(e) {
        var volume = e.target.value;
        var key = {};
        key[STORAGE_KEY] = volume;
        chrome.storage.local.set(key, function() {
            setLabel(volume);
        });
    });    

    chrome.storage.local.get(STORAGE_KEY, function(data) {
        var volume = data[STORAGE_KEY];
        if (!volume) {
            volume = 0;
        }
        element.value = volume;
        setLabel(volume);
    });



});
