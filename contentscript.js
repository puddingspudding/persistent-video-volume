(function() {
    const STORAGE_KEY = "video-volume";
    const STATUS_KEY = "video-volume-status-per-website";

    let store = chrome.storage || window.storage;

    lock = false;
    function setVolume() {
        let host = window.location.host;
        let key = STATUS_KEY + '_' + host;
        store.local.get(key, function(data) {
            if (key in data && !data[key]) {
                return;
            }

            var videoTags = document.getElementsByTagName("video");
            var audioTags = document.getElementsByTagName("audio");
            
            if (videoTags.length == 0 && audioTags.length == 0) {
                return;
            }

            store.local.get(STORAGE_KEY, function(data) {
                if (!data || !(STORAGE_KEY in data)) {
                    return;
                }
                if (lock) {
                    return;
                }

                for (var x = 0; x < videoTags.length; x++) {
                    videoTags[x].volume = data[STORAGE_KEY] / 100;
                }
                for (var x = 0; x < audioTags.length; x++) {
                    audioTags[x].volume = data[STORAGE_KEY] / 100;
                }

                for (var i in videoTags) {
                    if (!videoTags[i]) {
                        return;
                    }
                    videoTags[i].onvolumechange = function (argument) {
                        lock = true;
                        var key = {};
                        key[STORAGE_KEY] = Math.round(argument.target.volume * 100)
                        store.local.set(key, function() {
                            lock = false;
                        });
                    }
                }
                for (var i in audioTags) {
                    if (!audioTags[i]) {
                        return;
                    }
                    audioTags[i].onvolumechange = function (argument) {
                        lock = true;
                        var key = {};
                        key[STORAGE_KEY] = Math.round(argument.target.volume * 100)
                        store.local.set(key, function() {
                            lock = false;
                        });
                    }
                }

            });
        });
    }

    function parseHostFromURL(url) {
        var parser = document.createElement('a');
        parser.href = url;
        return parser.host;
    }

    setVolume();
    window.setInterval(setVolume, 100);
})();
