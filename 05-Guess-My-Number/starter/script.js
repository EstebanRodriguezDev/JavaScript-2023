'use strict';

const secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secrectNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guess = parseInt(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Ingrese un numero';
  } else if (guess === secrectNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    score += 10;
    document.querySelector('.score').textContent = score;
  } else if (guess > secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥💣 You lost the game!';
    }
  } else if (guess < secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥💣 You lost the game!';
    }
  }
});
