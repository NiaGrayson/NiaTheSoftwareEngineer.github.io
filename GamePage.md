---
layout: default
title: Game Page
description: New games will be found here.
---

<button id="music-button">🎶 Play Music</button>

<script>
const music = new Audio("{{ 'Music/Smaller Sample Music.mp3' | relative_url }}");

music.loop = true;
music.volume = 0.4;

const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicButton.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "🎶 Play Music";
    }
});
</script>

## A new game is here! Hooray! 😄

<img src="assets/css/Smaller Candy Smash Thumbnail.png" alt="Candy Smash game announcement">

<a href="./CandySmash.html">🎮 Play CandySmash</a>

[back](./)

