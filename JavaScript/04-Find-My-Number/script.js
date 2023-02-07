'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 17;

document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value = 12;

console.log(document.querySelector('.guess').value);


else if (rNum > 20) {
    document.querySelector('.message').textContent =
      'Please Enter Between 1 to 20 Number';
  }


*/

/**Taking Random Number */
let rNum = Number(Math.trunc(Math.random() * 20));
let highScore = 0;
let score = 20;

/**Check Button Logic */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  /** When there is no Input */
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⚠';
  } else if (guess === rNum) {
    /** When Palyer wins  */
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('.number').textContent = rNum;

    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > rNum) {
    /** When Number is greater  */
    if (score > 1) {
      document.querySelector('.message').textContent = 'Its Big Number ⚡';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost Game 😢';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < rNum) {
    /** When Number is smaller  */
    if (score > 1) {
      document.querySelector('.message').textContent = 'Its Small Number 🤏';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost Game 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  rNum = Number(Math.trunc(Math.random() * 20));
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
