#!/bin/bash

#apply patches to the game
sed -i 's/"scripts\/c3runtime.js"//' game/scripts/main.js
cp webpack.config.js game/
cp package.json game/
cp index.html game/
cp play.html game/
cp polyfill.js game/

#bundle it for the web
cd game
npm i
npx webpack