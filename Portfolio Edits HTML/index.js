const audio = document.createElement('audio');
audio.src = 'Sample Music.mp3';
audio.loop = true;

const musicButton = document.getElementById('music-button');
musicButton.addEventListener('click', playMusic);

function playMusic() {
   if (!audio.paused) {
       audio.pause();
   }
    else {
        audio.play();
    }
}
