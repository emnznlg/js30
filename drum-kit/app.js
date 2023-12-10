window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;

  const key = document.querySelectorAll('.key');

  key.forEach((k) => {
    if (e.key === k.getAttribute('data-key')) k.classList.add('playing');
    setTimeout(() => {
      k.classList.remove('playing');
    }, 100);
  });

  audio.play();
});
