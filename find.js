'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
  


  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    

    // When player wins
  } else if (guess === secretNumber) {
     document.querySelector('.message').textContent = ' Correct Number!';
   

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

   

  }
  else if (guess !== secretNumber) {
   
      document.querySelector('.message').textContent = 'Please enter another number';
     

   
  }

});

