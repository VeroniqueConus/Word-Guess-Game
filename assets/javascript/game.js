//Define variables w/ IDs
var guessedLetters = document.getElementById("guessed-letters-text");
var guessesLeft = document.getElementById("guesses-left");
var wonText = document.getElementById("you-won")
var lostText = document.getElementById("you-lost")
var placeholder = document.getElementById("")
var newGameButton = document.getElementById("new-game")
var alertGameNotRunning = document.getElementById("game-over");

//Define other variables
var wins = 0;
var losses= 0;
var gameOn = false;
var computerChoice ='';
var computerChoicePlaceholder = [];
var rightGuesses = [];
var wrongGuesses = [];

var loseSound = new Audio("path/path/path/");
var winSound = new Audio("path/path/path/");
var startGameSound = new Audio ("path/path/path/");






var guessesLeft = 10


var startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener('click', function() {
    newGame();
});

// Array that lists out all of the answers.
var allSimpsonsList = ["homer","marge", "rod", "lisa", "bart", "todd", "ned", "patty", "selma"];



// TODO:
// - Need to fix code so that if the word is "test" and the user selects "t" that is fills in both t's.
// - counters for number of ties.
// - handle an incorrect letter guess.
// - know when all letters have been guessed. WIN!


function toggleStartGameButton() {
    if (startGameButton.style.display === "" || startGameButton.style.display === "block") { // shown
        startGameButton.style.display = "none";
    } else {
        startGameButton.style.display = "block";
    }
}

var selectedGameWord;
function selectGameWord() {
    selectedGameWord = allSimpsonsList[Math.floor(Math.random() * allSimpsonsList.length)];
    console.log("selectedGameWord = ", selectedGameWord);
}

var placeholderContainerElm = document.getElementById("placeholderContainer");
var underscores = [];

function createPlaceholder() {
    for (var i = 0; i < selectedGameWord.length; i++) {
        underscores.push("_");
    }

    placeholderContainerElm.innerHTML = underscores.join(" ");
    placeholderContainerElm.style.display = "block";
}

function createGameEventListeners() {
    document.body.addEventListener("keyup", function(evt) {
        isSelectedLetterInSelectedGameWord(evt.key);
    });
}

function isSelectedLetterInSelectedGameWord(letterPressed) {
    var letterIndex = selectedGameWord.indexOf(letterPressed);
    if(letterIndex > -1) { // if it is... do this
        console.log("good");
        addLetterToPlaceholder(letterIndex, letterPressed)
    } else { // else, do that...
        guessesLeft = guessesLeft - 1;
        checkForNoGuesses();

        console.log("bad, guessesLeft", guessesLeft);
    }
}

function addLetterToPlaceholder(index, letter) {
    underscores.splice(index, 1, letter);
    placeholderContainerElm.innerHTML = underscores.join(" ");
    checkForWin();
}

function checkForWin() {
    if (underscores.indexOf("_") == -1) {
        console.log("WIN");
    } else {
        console.log("keep going (unless tries are all used up)");
    }
}

function checkForNoGuesses() {
    if (guessesLeft === 0) {
        console.log("no more guesses... end game.")
    }
}

// This function starts the game and readies all the pieces that make up the gameplay.
function newGame (){
    toggleStartGameButton();
    selectGameWord();
    createPlaceholder();
    createGameEventListeners();




    // play sound
    // startGameSound.play();

    // select a random word





    
    gameOn = true;
    guessesLeft = 10;
    guessedLetters = [];
    wrongLetters = [];
    
    // computerChoicePlaceholder = [];
    // letterAlreadyPicked.textContent = "";
    // alertGameOff.textContent = "";

    // document.onkeyup = function(event) {
    //     // computer picks a random Simpson
    //     computerChoice = allSimpsonsList[Math.floor(Math.random() * allSimpsonsList.length)];
    //     console.log(computerChoice);

    //     // we need to show the EMPTY spaces needed for the word
    //     for (var i=0; i < computerChoice.length; i++) {
    //         if (computerChoice[i] === " ") {
    //             computerWordPlaceholder.push(" ");
    //         } else {
    //             computerWordPlaceHolder.push("_");
    //         }
    //     }

    //     //now, show on DOM 
    //     guessesLeft.textContent = guessesLeft;
    //     placeholder.textContent = computerChoicePlaceholder.join('');
    //     guessedLetters.textContent = wrongGuesses;
    // };
    
}




//  computer compares the user's guessed letter to the letters in its random choice word computerChoice
function guessedLetters(letter){
    console.log(letter);

    if (gameOn === true && guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);

        for (var i = 0; i < computerChoice.length; i++) {
            if (computerChoice[i].toLowerCase () === letter.loLowerCase ()) {
                computerChoicePlaceholder[i] = computerChoice[i];
                letterAlreadyPicked.textContent = "";

            }
        }
    }
}

// let's check the user's letter
function checkIncorrect (letter) {
    if (computerWordPlaceHolder.indexOf(letter.toLowerCase()) === -1){
        guessesLeft--;
        wrongGuesses.push(letter);
        guessedLettersText.textContent

    }
}