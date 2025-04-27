#!/bin/bash
local_path="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ln -sf "${local_path}/i-mpv.sh" /usr/local/bin/i-mpv.sh
ln -sf  "${local_path}/i-mpv.desktop" /usr/share/applications/i-mpv.desktop
xdg-mime default i-mpv.desktop x-scheme-handler/i-mpv
update-desktop-database