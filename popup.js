
const STORAGE_KEY = "video-volume";
const STATUS_KEY = "video-volume-status-per-website";

let store = chrome.storage || window.storage;
let tbs = chrome.tabs || window.tabs;
document.addEventListener('DOMContentLoaded', function() {

    const slider = new mdc.slider.MDCSlider(document.querySelector('.mdc-slider'));

    const status = document.getElementById('status');
    mdc.checkbox.MDCCheckbox.attachTo(document.querySelector('.mdc-checkbox'));

    var text = document.getElementById("volume-value-label");

    var setLabel = function(volume) {
        text.textContent = volume + '%';
    }

    slider.listen('MDCSlider:change', () => {
        var key = {};
        key[STORAGE_KEY] = slider.value;
        store.local.set(key, function() {
            setLabel(slider.value);
        });
    });
    status.addEventListener('change', () => {
        let enabled = status.checked;
        slider.disabled = !enabled;
        tbs.query({active: true}, function(tabs) {
            let host = parseHostFromURL(tabs[0].url);
            let key = {};
            key[STATUS_KEY + '_' + host] = enabled;
            store.local.set(key);
        });
    });

    tbs.query({active: true}, function(tabs) {
        let host = parseHostFromURL(tabs[0].url);
        let key = STATUS_KEY + '_' + host;
        store.local.get(key, function(data) {
            if (key in data) {
                slider.disabled = !data[key];
                status.checked = data[key];
            } else {
                status.checked = true;
            }
        });
    });

    store.local.get(STORAGE_KEY, function(data) {
        var volume = data[STORAGE_KEY];
        if (!volume) {
            volume = 0;
        }
        slider.value = volume;
        setLabel(volume);
    });

    function parseHostFromURL(url) {
        var parser = document.createElement('a');
        parser.href = url;
        return parser.host;
    }

});
