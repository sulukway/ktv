window.onload = function() {
	flowplayer("#hlsjsvod", {
		splash: true,
		aspectRatio: "16:9",

		clip: {
			hlsjs: { safari: true },
			sources: [
				{
					type: "application/x-mpegurl",
					src: "http://ptv.is:80/play/live.php?mac=00:1A:79:00:04:02&stream=517244&extension=m3u8"
				}
			]
		}
	});
};