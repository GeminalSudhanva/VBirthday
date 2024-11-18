// Reveal Birthday Card Content
function openCard() {
    document.getElementById("card-content").classList.toggle("hidden");
}

// Reveal Wish Message
function revealWish() {
    document.getElementById("wish-text").classList.toggle("hidden");
}

// Toggle Background Music
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
    isPlaying = !isPlaying;
}


// Countdown to Next Birthday
function countdownToNextBirthday() {
    const nextBirthday = new Date(new Date().getFullYear() + 1, 0, 1); // Set next birthday date
    const now = new Date();
    const diff = nextBirthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").textContent = days;
}

countdownToNextBirthday();
