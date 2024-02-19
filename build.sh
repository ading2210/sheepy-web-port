#!/bin/bash

#combined build script
./download.sh
./patch.sh
rm -rf game/node_modules

echo "Build complete. You can now start a web server in the game/ directory to begin playing."