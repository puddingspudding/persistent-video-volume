#/bin/bash

MCW_VERSION=$1
PACKAGE_VERSION=$2

zip $PACKAGE_VERSION.zip \
    manifest.json \
    pvv.png \
    popup.js \
    popup.html \
    README.md \
    LICENSE \
    icon*.png \
    contentscript.js \
    material-components-web-$MCW_VERSION/build/material-components-web.css \
    material-components-web-$MCW_VERSION/build/mdc.ripple.css \
    material-components-web-$MCW_VERSION/build/mdc.autoInit.js \
    material-components-web-$MCW_VERSION/build/material-components-web.js \
    material-components-web-$MCW_VERSION/build/mdc.ripple.js
