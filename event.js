let args = [
    `"${media.video}"`,
    media.audio ? `--audio-file="${media.audio}"` : '',
    media.subtitle ? `--sub-file="${media.subtitle}"` : '',
    media.origin ? `--http-header-fields="origin: ${media.origin}"` : '',
    media.referer ? `--http-header-fields="referer: ${media.referer}"` : '',
    config.networkProxy ? `--http-proxy="${config.networkProxy}"` : '',
    media.ytdlp.networkProxy ? `--ytdl-raw-options="proxy=[${media.ytdlp.networkProxy}]"` : '',
    media.ytdlp.quality ? `--ytdl-format="bestvideo[height<=?${media.ytdlp.quality}]%2Bbestaudio/best"` : '',
    media.bilibili.cid ? `--script-opts-append="cid=${media.bilibili.cid}"` : '',
    media.title ? `--force-media-title='${media.title}'`.replace(/'/g, '\\\'') : '', // 稍微处理一下,挡住一些特殊内容
    media.time ? `--start="${media.time}"` : '',
]
args = args.filter(item => item !== '').join(' ');

const data = btoa(String.fromCharCode(...new TextEncoder().encode(args)));
window.open("i-mpv://" + data, '_self');
