let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
let previousGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

let previousGuess = [];
let playGame = true;
let numOfGuesses = 1;

const p = document.createElement("p");

if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  } else {
    previousGuess.push(guess);
    if (numOfGuesses > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right ");
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("Your guessed number is very high!!");
  } else if (guess < randomNumber) {
    displayMessage("Your guessed number is too low!!");
  }
}

function displayGuess(guess) {
  //it will refresh input box, update previous guesses and remaining guesses
  userInput.value = "";
  previousGuesses.innerHTML += `${guess}, `;
  numOfGuesses++;
  remainingGuesses.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
  // pass the message to lowOrHi query selector and print as it is.
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

console.log("Just random text");

function endGame() {
  //to end the game
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Starting new Game</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const buttonForNewGame = document.querySelector("#newGame");
  buttonForNewGame.addEventListener("click", function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numOfGuesses = 1;
    previousGuesses = "";
    remainingGuesses.innerHTML = `${11 - numOfGuesses}`;
    userInput.removeAttribute("disabled");
    resultParas.removeChild(p);
    playGame = true;
  });
}
