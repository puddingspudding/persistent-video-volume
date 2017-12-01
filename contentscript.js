(function() {
    const STORAGE_KEY = "video-volume";
    const STATUS_KEY = "video-volume-status-per-website";

    let store = chrome.storage || window.storage;
    function setVolume() {
        let host = window.location.host;
        let key = STATUS_KEY + '_' + host;
        store.local.get(key, function(data) {
            if (key in data && !data[key]) {
                return;
            }
            var videoTags = document.getElementsByTagName("video");
            if (videoTags.length == 0) {
                return;
            }

            store.local.get(STORAGE_KEY, function(data) {
                if (!data || !(STORAGE_KEY in data)) {
                    return;
                }
                for (var x = 0; x < videoTags.length; x++) {
                    videoTags[x].volume = data[STORAGE_KEY] / 100;
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
    window.setInterval(setVolume, 1000);
})();
