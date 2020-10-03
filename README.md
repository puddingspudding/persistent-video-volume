# Persistent Video/Audio Volume

[![Google Chrome Webstore](https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_206x58.png)](https://chrome.google.com/webstore/detail/persistent-video-volume/ppoliijncpdcgddmfibmgnjhegceaadj)[![Firefox Addons](https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png)](https://addons.mozilla.org/de/firefox/addon/persistent-video-audio-volume/?src=external-github)

## Use cases

- Facebook.com
- 9gag.com
- Bandcamp.com
- ... and many more

# Credits

- Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)


# Build

## Dependencies

### [Material Components Web 4.0.0](https://github.com/material-components/material-components-web/archive/v4.0.0.zip)

```
$ wget "https://github.com/material-components/material-components-web/archive/v4.0.0.zip"
$ unzip v4.0.0.zip
$ cd material-components-web-4.0.0/
$ npm install
$ npm run build
```

## Zip Extension

```
zip package.zip \
    manifest.json \
    pvv.png \
    popup.js \
    popup.html \
    README.md \
    LICENSE \
    icon*.png \
    contentscript.js \
    material-components-web-4.0.0/build/material-components-web.css \
    material-components-web-4.0.0/build/mdc.ripple.css \
    material-components-web-4.0.0/build/mdc.autoInit.js \
    material-components-web-4.0.0/build/material-components-web.js \
    material-components-web-4.0.0/build/mdc.ripple.js

```

