
const wordList = ["chateau", "sorcier", "mystere"];

function chooseRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

let wordToGuess = chooseRandomWord();
let wordDisplay = [];
let chancesLeft = 7;

// Initialisation du mot caché
for (let i = 0; i < wordToGuess.length; i++) {
    wordDisplay.push("_");
}

document.getElementById("word-display").innerText = wordDisplay.join(" ");

function guessLetter() {
    const letterInput = document.getElementById("letter-input");
    const letter = letterInput.value.toLowerCase();
    letterInput.value = "";

    if (wordToGuess.includes(letter)) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === letter) {
                wordDisplay[i] = letter;
            }
        }
        document.getElementById("word-display").innerText = wordDisplay.join(" ");
    } else {
        chancesLeft--;
        document.getElementById("chances-left").innerText = "Chances restantes : " + chancesLeft;
    }
    if (wordDisplay.join("") === wordToGuess) {
        alert("5 6 - - - - - -");
    } else if (chancesLeft === 0) {
        alert("Vous avez perdu, réessayez");
    }
}
