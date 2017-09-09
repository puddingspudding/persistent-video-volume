var STORAGE_KEY = "video-volume";

function setVolume() {
    var videoTags = document.getElementsByTagName("video");
    if (videoTags.length == 0) {
        return;
    }

    chrome.storage.local.get(STORAGE_KEY, function(data) {
        if (!data || !(STORAGE_KEY in data)) {
            return;
        }
        for (var x = 0; x < videoTags.length; x++) {
            videoTags[x].volume = data[STORAGE_KEY] / 100;
        }
    });    
}

setVolume();
window.setInterval(setVolume, 1000);
