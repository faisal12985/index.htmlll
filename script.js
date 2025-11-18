const audio = document.getElementById('bgMusic');
const musicBtn = document.querySelector('.music-btn');
const musicIcon = document.getElementById('musicIcon');
let isPlaying = false;

// Toggle music play/pause
function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicIcon.textContent = '🔇';
        musicBtn.innerHTML = '<span id="musicIcon">🔇</span> Click to Play Music';
    } else {
        audio.play();
        musicIcon.textContent = '🎵';
        musicBtn.innerHTML = '<span id="musicIcon">🎵</span> Music Playing...';
    }
    isPlaying = !isPlaying;
}

// Optional: Customize the friend's name
// Change "Priya" to your friend's actual name
document.getElementById('friendName').textContent = 'Khushi';
