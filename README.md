# Persistent Video/Audio Volume

<a href="https://chrome.google.com/webstore/detail/persistent-video-volume/ppoliijncpdcgddmfibmgnjhegceaadj" target="_blank">
    <img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/mPGKYBIR2uCP0ApchDXE.png" height="60px"/>
</a>
<a href="https://addons.mozilla.org/firefox/addon/persistent-video-audio-volume/?src=external-github" target="_blank">
    <img src="https://blog.mozilla.org/addons/files/2015/11/get-the-addon.png" height="60px"/>
</a>
<a href="https://chrome.google.com/webstore/detail/persistent-video-volume/ppoliijncpdcgddmfibmgnjhegceaadj" target="_blank">
    <img src="https://github.com/puddingspudding/persistent-video-volume/raw/release-0.11.0/brave-logotype-full-color.png" height="60px"/>
</a>
<a href="https://microsoftedge.microsoft.com/addons/detail/persistent-videoaudio-vo/libkaafmkldioiebcmafnpjfinafjlfk" target="_blank">
    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" height="60px" />
</a>

## Features

- :heavy_check_mark: Saves volume settings for each website and applies saved volume on every visit
- :heavy_check_mark: Or limit volume to a set maximum
- :heavy_check_mark: Privacy - Does not track any activity

## Use cases

- :heavy_check_mark: Facebook.com
- :heavy_check_mark: 9gag.com
- :heavy_check_mark: Bandcamp.com
- :heavy_check_mark: ... and many more

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

