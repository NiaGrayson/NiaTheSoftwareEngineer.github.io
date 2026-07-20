---
layout: default
title: Candy Smash
description: Welcome to Candy Smash!
---

<h1>Candy Smash</h1>

<p>Match candies, earn points, and see how high you can score!</p>

<div class="music-button-container">
    <button id="music-button">🎶 Play Music</button>
</div>

<div class="game-container">
    <iframe
        src="{{ 'Candy%20Smash%20Game/index.html' | relative_url }}"
        title="Candy Smash Game"
        loading="lazy">
    </iframe>
</div>

<style>
.game-container {
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
}

.game-container iframe {
    width: 100%;
    height: 850px;
    border: none;
    border-radius: 12px;
    background: transparent;
}

/* Centered sticky music button */
.music-button-container {
    position: sticky;
    top: 10px;
    display: flex;
    justify-content: center;
    z-index: 1000;
    margin: 20px 0;
}

#music-button {
    padding: 10px 18px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 8px;
}
</style>

<script>
const music = new Audio("{{ 'Music/Smaller Sample Music.mp3' | relative_url }}");

music.loop = true;
music.volume = 0.4;

const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", async function () {
    if (music.paused) {
        await music.play();
        musicButton.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "🎶 Play Music";
    }
});
</script>
