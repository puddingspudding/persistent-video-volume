
const STORAGE_KEY = "video-volume";
const MAX_VOL_STORAGE_KEY = "max-global-video-volume";
const STATUS_KEY = "video-volume-status-per-website";

let store = chrome.storage || window.storage;
let tbs = chrome.tabs || window.tabs;
let runtime = chrome.runtime || window.runtime;


document.addEventListener('DOMContentLoaded', function() {

    var host = "";

    const websiteSlider = new mdc.slider.MDCSlider(document.querySelector('#website-slider'));
    const maxGlobalSlider = new mdc.slider.MDCSlider(document.querySelector('#max-global-slider'));

    const status = document.getElementById('status');
    const statusLabel = document.getElementById('status-label');

    mdc.checkbox.MDCCheckbox.attachTo(document.querySelector('.mdc-checkbox'));

    var websiteText = document.getElementById("volume-value-label");
    var maxGlobalText = document.getElementById("max-volume-value-label");

    var setWebsiteLabel = function(volume) {
        websiteText.textContent = volume + '%';
    }

    var setMaxGlobalLabel = function(volume) {
        maxGlobalText.textContent = volume + '%';
    }

    var currentTab;
    

    tbs.query({active: true, currentWindow: true}, function(tabs) {
        currentTab = tabs[0];
        host = parseHostFromURL(tabs[0].url);
        let key = STATUS_KEY + '_' + host;
        store.local.get(key, function(data) {
            if (key in data) {
                status.checked = data[key];
            } else {
                status.checked = false;
            }
            websiteSlider.disabled = !status.checked;
            maxGlobalSlider.disabled = status.checked;
            setStatusLabel(!status.checked, host);
        });

        store.local.get(STORAGE_KEY + '_' + host, function(data) {
            var volume = data[STORAGE_KEY + '_' + host];
            if (isNaN(volume)) {
                volume = 50;
            }
            websiteSlider.value = volume;
            setWebsiteLabel(volume);
        });

        store.local.get(MAX_VOL_STORAGE_KEY, function(data) {
            var volume = data[MAX_VOL_STORAGE_KEY];
            if (!volume) {
                volume = 50;
            }
            maxGlobalSlider.value = volume;
            setMaxGlobalLabel(volume)
        });
    });

    maxGlobalSlider.listen('MDCSlider:change', () => {
        var key = {};
        key[MAX_VOL_STORAGE_KEY] = maxGlobalSlider.value;
        store.local.set(key, function() {
            setMaxGlobalLabel(maxGlobalSlider.value);
        });
    });

    websiteSlider.listen('MDCSlider:change', () => {
        var key = {};
        key[STORAGE_KEY + '_' + host] = websiteSlider.value;
        store.local.set(key, function() {
            setWebsiteLabel(websiteSlider.value);
        });
        tbs.sendMessage(currentTab.id, websiteSlider.value);
    });

    status.addEventListener('change', () => {
        let enabled = status.checked;
        websiteSlider.disabled = !enabled;
        maxGlobalSlider.disabled = enabled;

        let key = {};
        key[STATUS_KEY + '_' + host] = enabled;
        store.local.set(key);
        setStatusLabel(!enabled, host);
    });


    function parseHostFromURL(url) {
        var parser = document.createElement('a');
        parser.href = url;
        return parser.host;
    }

    function setStatusLabel(disabled, host) {
        if (!disabled) {
            //statusLabel.textContent = "Enabled for " + host
        } else {
            //statusLabel.textContent = "Disabled for " + host
        }
    }

});
