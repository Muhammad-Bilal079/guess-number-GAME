let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guessess')
let remaining = document.querySelector('#remaining')
const loworHigh = document.querySelector('.lowORhi')
const startOver = document.querySelector('.resultparas')

const p = document.createElement('p')
let previousGuess = [];
let numGuess = 1;

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid guess number')
    } else if (guess < 0) {
        alert('Please enter a guess number more than zero')
    } else if (guess > 100) {
        alert('Please enter a guess number less than 100')
    } else {
        previousGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(numGuess)
            displayMessage(`The Game is Over , Random guess was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Won`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`The guess is too low`)
    } else if (guess > randomNumber) {
        displayMessage(`The guess is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = " "
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message) {
    loworHigh.innerHTML = `<h2>${message} </h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', ' ')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame"> Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}


function newGame() {
    const newGamebutton = document.querySelector('#newgame')
    newGamebutton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess = []
        numGuess = 1
        guessSlot.innerHTML = ' '
        remaining.innerHTML = `${11 - numGuess}`
        // console.log(numGuess);                     //====================
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}


