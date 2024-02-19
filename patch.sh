#!/bin/bash

#apply patches to the game
sed -i 's/"scripts\/c3runtime.js"//' game/scripts/main.js
sed -i -r '/ActivateAchievement\(achievement\)/a \{activate_achievement(achievement)\}, _()' game/scripts/c3runtime.js
cp src/* game/

#bundle it for the web
cd game
npm i
npx webpack