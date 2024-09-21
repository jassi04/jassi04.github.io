// Select all video elements
const videos = document.querySelectorAll('video');

videos.forEach(video => {
    // On hover, play the video without sound
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    // On mouse leave, pause the video
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Restart video when not hovered
    });

    // On click, unmute the video and allow sound to play
    video.addEventListener('click', () => {
        video.muted = false;
        video.play();
    });
});
