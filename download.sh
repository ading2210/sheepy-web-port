#!/bin/bash

#download the game from itch.io

mkdir -p download
mkdir -p game

main_html="$(curl "https://mrsuicidesheep.itch.io/sheepy")"
csrf="$(echo "$main_html" | pcregrep -o1 '<meta name="csrf_token" value="(.+?)" \/>')"
api_url="https://mrsuicidesheep.itch.io/sheepy/file/9733814?source=game_download&after_download_lightbox=1&as_props=1"

game_json="$(curl "$api_url" \
  --compressed -X POST -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0' \
  -H 'Accept: */*' \
  -H 'Accept-Language: en-US,en;q=0.5' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'Origin: https://mrsuicidesheep.itch.io' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  --data-raw "csrf_token=$csrf")"
download_url="$(echo $game_json | jq -r '.url')"
zip_file="download/sheepy.zip"

wget -c $download_url -O $zip_file

#extract the nw.js bundle from the game files

bundle_name="SHEEPY A Short Adventure/package.nw"
bundle_file="download/bundle.zip"
unzip -p "$zip_file" "$bundle_name" > $bundle_file
unzip $bundle_file -d game