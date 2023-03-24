/*
const video = document.getElementById('video');

const hls = new Hls();

if (Hls.isSupported()) {

    document.addEventListener('DOMContentLoaded', function (event) {
        var linkInput = document.getElementById("link-input");
        var playButton = document.getElementById("play-button");
        playButton.disabled = true;

        linkInput.addEventListener("input", function () {
            if (linkInput.value === "") {
                playButton.disabled = true;
                playButton.classList.remove("enabled");
            } else {
                playButton.disabled = false;
                playButton.classList.add("enabled");
            }
        });


        playButton.addEventListener("click", function () {
            var link = linkInput.value;
            setupHTMLPlayer('player-wrapper', link).then(function (video) {
                var muteOnStart = true;
                video.play(muteOnStart);
            });
        });
    });

}





/*
// Check if HLS is supported
if (Hls.isSupported()) {
    // Load the stream URL from the input field
    const streamUrl =

    // Attach the video element to the Hls.js instance
    hls.attachMedia(video);

    // Load the stream URL
    hls.loadSource(streamUrl);

    // Start playing the video
    video.play();
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // HLS is supported by Safari, but not Hls.js
    video.src = streamUrl;
    video.play();
}

 */



