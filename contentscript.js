
var prev = -1;

window.setInterval(function() {

    var videoTags = document.getElementsByTagName("video");
    if (videoTags.length == 0) {
        return;
    }

    chrome.storage.local.get("fb-volume", function(data) {
        var volume = data['fb-volume'];
        for (var x = 0; x < videoTags.length; x++) {
            videoTags[x].volume = volume / 100;
        }
        prev = volume;
    });
}, 1000);
