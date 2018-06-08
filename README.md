# Persistent Video/Audio Volume

[![Google Chrome Webstore](https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_206x58.png)](https://chrome.google.com/webstore/detail/persistent-video-volume/ppoliijncpdcgddmfibmgnjhegceaadj)[![Firefox Addons](https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png)](https://addons.mozilla.org/de/firefox/addon/persistent-video-volume/)

## Use cases

- Facebook.com
- 9gag.com
- Bandcamp.com
- ... and many more

# Credits

- Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)


# Build

## Dependencies

### [Material Components Web](https://github.com/material-components/material-components-web)

```
git submodule init && git submodule update
cd material-components-web && npx webpack
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
    material-components-web/build/material-components-web.css \
    material-components-web/build/mdc.ripple.css \
    material-components-web/build/mdc.autoinit.js \
    material-components-web/build/material-components-web.js \
    material-components-web/build/mdc.ripple.js

```

