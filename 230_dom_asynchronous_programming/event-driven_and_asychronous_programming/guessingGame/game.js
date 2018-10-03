document.addEventListener('DOMContentLoaded', function(event) {
  var answer;
  var guesses;

  var form = document.querySelector('form');
  var input = document.querySelector('#guess');
  var paragraph = document.querySelector('p');
  var link = document.querySelector('a');
  var button = document.querySelector('input[type="submit"]');

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
    button.disabled = false;
    form.reset();
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var guess = parseInt(input.value, 10);
    var message;

    guesses += 1;

    if (guess > answer) {
      message = 'Answer is lower than ' + guess;
    } else if (guess < answer) {
      message = 'Answer is higher than ' + guess;
    } else if (guess === answer) {
      message = 'Correct! It took you ' + guesses + ' guesses.';
      button.disabled = true;
    } else {
      message = 'Invalid Entry. Enter a number between 1 and 100.'
    }
    paragraph.textContent = message;
  });
  link.addEventListener('click', function(event) {
    event.preventDefault();
    newGame();
  });

  newGame();
});
