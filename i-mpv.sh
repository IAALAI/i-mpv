#!/bin/bash
raw="${1#i-mpv://}"

data=$(echo "$raw" | base64 -d )
echo $data >> /tmp/i-mpv-history
eval "mpv $data"