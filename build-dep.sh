#!/bin/bash

MCW_VERSION=$1

sudo apt-get install -y libcairo2-dev
sudo apt-get install -y libpango1.0-dev

wget "https://github.com/material-components/material-components-web/archive/v$MCW_VERSION.zip"
unzip v$MCW_VERSION.zip
cd material-components-web-$MCW_VERSION/
npm install
npm run postinstall
npm run build

