const video = document.getElementById('video');
const hls = new Hls();
const linkInput = document.getElementById("link-input");
const playButton = document.getElementById("play-button");

playButton.disabled = true;

function playDefaultVideo() {
    const streamUrl = "http://localhost:8080/channels/myfirstchannel/master.m3u8";
    // Attach the video element to the Hls.js instance
    hls.attachMedia(video);

    // Load the stream URL
    hls.loadSource(streamUrl);

    // Start playing the video
    video.play();
}

// Call the function to play the default video
playDefaultVideo();

// Check if HLS is supported
if (Hls.isSupported()) {

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
        const streamUrl = linkInput.value;
        // Attach the video element to the Hls.js instance
        hls.attachMedia(video);

        // Load the stream URL
        hls.loadSource(streamUrl);

        // Start playing the video
        video.play();
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // HLS is supported by Safari, but not Hls.js

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
        const streamUrl = linkInput.value;
        video.src = streamUrl;
        video.play();
    });
}