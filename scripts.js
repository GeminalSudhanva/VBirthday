// Confetti Animation
function celebrate() {
  const canvas = document.getElementById('confetti-canvas');
  const confettiInstance = confetti.create(canvas, { resize: true, useWorker: true });
  confettiInstance({
    particleCount: 200,
    spread: 60,
    origin: { y: 0.6 },
  });
}

setTimeout(celebrate, 3500);

// Music Toggle
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = 'Pause Music 🎶';
  } else {
    bgMusic.pause();
    musicToggle.textContent = 'Play Music 🎵';
  }
});

// Countdown Timer
function countdown() {
  const birthday = new Date("2025-11-12");
  const now = new Date();
  const timeDiff = birthday - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(countdown, 1000);

// Resize Canvas for Confetti
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
