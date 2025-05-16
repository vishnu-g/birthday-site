const fs = require('fs');
const path = require('path');

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
    const userWish = prompt('What do you wish for? 🎁');
    if (userWish) {
      showWish(`Your wish "${userWish}" is on its way! 🌟`);
    } else {
      showWish("Hope your wish is on its way! 🎉");
    }
  }, 3500);
}

// Show wish message  s
function showWish(message) {
  const wishPopup = document.getElementById('wishPopup');
  const wishText = document.getElementById('wishText');
  wishText.textContent = message;
  wishPopup.style.display = 'block';

  // Hide the popup after 3 seconds
  setTimeout(() => {
    wishPopup.style.display = 'none';
  }, 3000);
}