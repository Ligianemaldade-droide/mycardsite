function openEnvelope() {
    document.querySelector('.envelope').classList.add('hidden');
    document.querySelector('.letter').classList.remove('hidden');
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
