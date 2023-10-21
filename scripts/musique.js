const audio = new Audio('../scripts/musique.mp3');
audio.volume = 0.2;

function playMusic() {
    audio.play().catch(error => {
        console.error('Erreur de lecture de la musique :', error);
    });
    localStorage.setItem('musicPlaying', 'true');
}

function pauseMusic() {
    audio.pause();
    localStorage.setItem('musicPlaying', 'false');
}

document.addEventListener('DOMContentLoaded', () => {
    const musicButton = document.getElementById('msq');
    const musicPlaying = localStorage.getItem('musicPlaying');

    if (musicPlaying === 'true') {
        playMusic();
        musicButton.innerText = 'Musique ⏸️';
    } else {
        musicButton.innerText = 'Musique ▶️';
    }

    musicButton.addEventListener('click', () => {
        if (audio.paused) {
            playMusic();
            musicButton.innerText = 'Musique ⏸️';
        } else {
            pauseMusic();
            musicButton.innerText = 'Musique ▶️';
        }
    });
});
