#!/bin/bash

#apply patches to the game

#don't load the original c3runtime
sed -i 's/"scripts\/c3runtime.js"//' game/scripts/main.js

#custom callback for achievements
sed -i -r '/ActivateAchievement\(achievement\)/a \{activate_achievement(achievement)\}, _()' game/scripts/c3runtime.js

#prevent memory leak when loading audio
sed -i 's/!isMusic||audioDomHandler.IsPlayMusicAsSound()||needsSoftwareDecode/false/' game/scripts/main.js

#copy modified assets in src folder
cp src/* game/

#bundle it for the web
cd game
npm i
npx webpack