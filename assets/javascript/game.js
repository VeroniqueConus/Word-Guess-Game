//Define variables w/ IDs
var guessedLetters = document.getElementById("guessed-letters-text");
var guessesLeft = document.getElementById("guesses-left");
var wonText = document.getElementById("you-won")
var lostText = document.getElementById("you-lost")
var placeholder = document.getElementById("")
var startGameButton = document.getElementById("start-game");
var placeholderContainerElm = document.getElementById("placeholderContainer");
var alertGameNotRunning = document.getElementById("game-over");

//Define other variables
var wins = 0;
var losses= 0;
var gameOn = false;
var selectedGameWord ='';
var computerChoicePlaceholder = [];
var rightGuesses = [];
var wrongGuesses = [];
var guessesLeft = 5

//Some audio fun
var loseSound =  new Audio("assets/audio/whatthehell.mp3"); 
var winSound =  new Audio("assets/audio/bigshot.mp3");
var startGameSound =  new Audio("assets/audio/letsroll.mp3");

var startGameButton = document.getElementById("startGameButton"); //when the "start game button" is clicked, the game starts!
startGameButton.addEventListener('click', function() {
    // startGameButton.onplay(function);
    startGameSound.play();
    toggleStartGameButton();
    selectGameWord();
    createPlaceholder();
    createGameEventListeners();
    gameOn = true;
    guessesLeft = 5;
    guessedLetters = [];
    wrongLetters = [];
});

// Array that lists out all of the possible options
var allSimpsonsList = ["homer","marge", "rod", "lisa", "bart", "milhouse", "ned", "abe", "selma"];

function toggleStartGameButton() { //press button to start game and hides it when playing
    if (startGameButton.style.display === "" || startGameButton.style.display === "block") { // shown
        startGameButton.style.display = "none";
    } else {
        startGameButton.style.display = "block";
    }
}

var selectedGameWord; //computer randomly picks a word
function selectGameWord() {
    selectedGameWord = allSimpsonsList[Math.floor(Math.random() * allSimpsonsList.length)];
    console.log("selectedGameWord = ", selectedGameWord);
}

//need a place to hold the mystery word
var placeholderContainerElm = document.getElementById("placeholderContainer");
var underscores = [];

//for every letter you need to guess, here are some blank spaces
function createPlaceholder() {
    for (var i = 0; i < selectedGameWord.length; i++) {
        underscores.push(" _ ");
    }

    //this puts spaces between the dashes, so you can count the number of spaces (ie letters) to guess
    placeholderContainerElm.innerHTML = underscores.join(" ");
    placeholderContainerElm.style.display = "block";
}

//is the letter i typed in the mystery word? Gotta create a function that checks.
function createGameEventListeners() {
    document.body.addEventListener("keyup", function(evt) {
        isSelectedLetterInSelectedGameWord(evt.key);
    });
}

    //Gotta check and log the guessed letter as good or bad
function isSelectedLetterInSelectedGameWord(letterPressed) {
    var letterIndex = selectedGameWord.indexOf(letterPressed);
    if (letterIndex > -1) { // if it is... do this
        console.log("good");
        addLetterToPlaceholder(letterIndex, letterPressed)
    } else { // else, do that...
        guessesLeft = guessesLeft - 1;
        checkForNoGuesses();

        console.log("bad, guessesLeft", guessesLeft);

        guessesLeft.textContent = guessesLeft;   //now, show on DOM 
        placeholder.textContent = computerChoicePlaceholder.join('');
        guessedLetters.textContent = wrongGuesses;
    }
}

function addLetterToPlaceholder(index, letter) {
    underscores.splice(index, 1, letter);
    placeholderContainerElm.innerHTML = underscores.join(" ");
    checkForWin();
}

function checkForWin() {
    if (underscores.indexOf("_") == -1) {
        winSound.play();
        console.log("WIN");
    } else {
        console.log("keep going (unless tries are all used up)");
    }
}

function checkForNoGuesses() {
    if (guessesLeft === 0) {
        loseSound.play();
        console.log("no more guesses... end game.")
    }
}


// TO DO:
// Note: Specifically chose names were NO letters were repeated because I couldn't figure out how to make the code account for 2 placeholders w/ the same letter that needed to be updated  :(
// - counters for number of tries.
// - handle an incorrect letter guess.
// - know when all letters have been guessed. 
//WIN - play sound, show new game button, reset all counters