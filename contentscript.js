(function() {
    const STORAGE_KEY = "video-volume";
    const MAX_VOL_STORAGE_KEY = "max-global-video-volume";
    const STATUS_KEY = "video-volume-status-per-website";

    let store = chrome.storage || window.storage;

    lock = false;
    function setVolume() {
        let host = window.location.host;
        let key = STATUS_KEY + '_' + host;
        let websiteKey = STORAGE_KEY + '_' + host;
        store.local.get([key, MAX_VOL_STORAGE_KEY, websiteKey, STORAGE_KEY], function(data) {

            var videoTags = document.getElementsByTagName("video");
            var audioTags = document.getElementsByTagName("audio");
            
            if (videoTags.length == 0 && audioTags.length == 0) {
                return;
            }

            if (lock) {
                return;
            }

            let maxVol = data[MAX_VOL_STORAGE_KEY] || 0.5;

            for (var x = 0; x < videoTags.length; x++) {
                if (websiteKey in data && key in data && data[key] === true) {
                    videoTags[x].volume = data[websiteKey] / 100;
                } else if (maxVol / 100 < videoTags[x].volume) {
                    videoTags[x].volume = maxVol / 100;
                }
            }
            for (var x = 0; x < audioTags.length; x++) {
                if (websiteKey in data && key in data && data[key] === true) {
                    audioTags[x].volume = data[websiteKey] / 100;
                } else if (maxVol / 100 < audioTags[x].volume) {
                    audioTags[x].volume = maxVol / 100;
                }
            }

            for (var i in videoTags) {
                if (!videoTags[i]) {
                    return;
                }
                if (!(key in data) || !data[key]) {
                    return;
                }
                videoTags[i].onvolumechange = function (argument) {
                    lock = true;
                    var key = {};
                    key[STORAGE_KEY + '_' + host] = Math.round(argument.target.volume * 100)
                    store.local.set(key, function() {
                        lock = false;
                    });
                }
            }
            for (var i in audioTags) {
                if (!audioTags[i]) {
                    return;
                }
                if (!(key in data) || !data[key]) {
                    return;
                }
                audioTags[i].onvolumechange = function (argument) {
                    lock = true;
                    var key = {};
                    key[STORAGE_KEY + '_' + host] = Math.round(argument.target.volume * 100)
                    store.local.set(key, function() {
                        lock = false;
                    });
                }
            }

        });
    }

    function parseHostFromURL(url) {
        var parser = document.createElement('a');
        parser.href = url;
        return parser.host;
    }

    setVolume();
    window.setInterval(setVolume, 500);
})();
