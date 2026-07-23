---
layout: default
title: To-Do List
description: To-Do List Demo
---

# To-Do List Demo

<div style="margin-bottom: 20px;">
    <button id="music-button">🎶 Play Music</button>
</div>

<iframe
    src="{{ '/ToDoList/' | relative_url }}"
    width="100%"
    height="700"
    style="border: none;">
</iframe>

<script>
const music = new Audio("{{ '/Music/Smaller Sample Music.mp3' | relative_url }}");

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

[back](./)
