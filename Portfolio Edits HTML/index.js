const audio = document.createElement('audio');
audio.src = 'https://pixabay.com/music/video-games-i-love-my-8-bit-game-console-301272/';
audio.loop = true;

document.body.appendChild(audio);

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
