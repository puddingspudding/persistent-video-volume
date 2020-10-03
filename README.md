# Persistent Video/Audio Volume

[![Google Chrome Webstore](https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_206x58.png)](https://chrome.google.com/webstore/detail/persistent-video-volume/ppoliijncpdcgddmfibmgnjhegceaadj)[![Firefox Addons](https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png)](https://addons.mozilla.org/de/firefox/addon/persistent-video-audio-volume/?src=external-github)
[![Google Chrome Webstore](https://github.com/puddingspudding/persistent-video-volume/raw/release-0.11.0/brave-logotype-full-color.png)](https://chrome.google.com/webstore/detail/persistent-video-volume/ppoliijncpdcgddmfibmgnjhegceaadj)

## Features

- Saves volume settings for each website and applies saved volume on every visit
- Or limit volume to a set maximum
- Privacy - Does not track any activity

## Use cases

- Facebook.com
- 9gag.com
- Bandcamp.com
- ... and many more

# Credits

- Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)


# Build

## Dependencies

### [Material Components Web 7.0.0](https://github.com/material-components/material-components-web/archive/v7.0.0.zip)

```
# ./docker-build-dep.sh MATERIAL_COMPONENTS_WEB_VERSION 
./docker-build-dep.sh 7.0.0
```

## Package Extension

```
# ./build.sh MATERIAL_COMPONENTS_WEB_VERSION PACKAGE_VERSION 
./build.sh 7.0.0 0.11.0
```

