const audio = document.createElement('audio');
audio.src = '/music/Sample%20Music.mp3';
audio.loop = true;

const musicButton = document.getElementById('music-button');
musicButton.addEventListener('click', playMusic);

function playMusic() {
    if (!audio.paused) {
        audio.pause();
        musicButton.textContent = "🎵 Play Music";
    } else {
        audio.play();
        musicButton.textContent = "⏸ Pause Music";
    }
}
