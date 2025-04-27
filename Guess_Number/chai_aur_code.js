let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('#guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
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
        displayMessage(`You guessed it right! 🎉`);
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low ⬇️`);
    } else if (guess > randomNumber) {
        displayMessage("Number is TOO high ⬆️");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `<span class="inline-block bg-indigo-500 text-white p-2 m-2 rounded-md shadow-md">${guess}</span>`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} attempts remaining`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2 class="text-xl font-semibold text-yellow-300 bg-opacity-70 p-4 rounded-lg shadow-lg">${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    const p = document.createElement('p');
    p.classList.add('bg-green-500', 'hover:bg-green-600', 'cursor-pointer', 'text-white', 'p-4', 'rounded-md', 'transition', 'font-semibold');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    document.body.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} attempts remaining`;
        userInput.removeAttribute('disabled');
        document.body.removeChild(newGameButton);
        playGame = true;
    });
}
