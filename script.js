// Pop balloon on click
function popBalloon(balloon) {
  balloon.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  balloon.style.transform = 'scale(0)';
  balloon.style.opacity = '0';
  setTimeout(() => {
    balloon.remove();
  }, 300);
}

// Blow out candles animation
function blowCandles() {
  const flames = document.querySelectorAll('.flame');
  flames.forEach((flame) => {
    flame.style.animationPlayState = 'paused';
    flame.style.opacity = '0';
  });
  showWish('Make a wish! 🎂');
  setTimeout(() => {
    showWish('Wishing you a day filled with love, happiness and joy! 🎉');
  }, 3500);
}

// Show birthday wish popup
function showWish(message) {
  const popup = document.getElementById('wishPopup');
  const text = document.getElementById('wishText');
  text.textContent = message;
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
}