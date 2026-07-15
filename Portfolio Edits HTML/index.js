const audio = document.createElement('audio');
audio.src = 'https://github.com/NiaGrayson/NiaTheSoftwareEngineer.github.io/blob/main/Portfolio%20Edits%20HTML/Sample%20Music.mp3';
audio.loop = true;

document.body.appendChild(audio);

const musicButton = document.getElementById('music-button');

musicButton.addEventListener('click', playMusic);

function playMusic() {
    if (!audio.paused) {
        audio.pause();
        musicButton.textContent = "🎶 Play Music";
    } else {
        audio.play();
        musicButton.textContent = "⏸ Pause Music";
    }
}
