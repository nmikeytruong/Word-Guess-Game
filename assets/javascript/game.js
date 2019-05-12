// variables
var gameOfWords = ["crow", "khaleesi", "maester", "unsullied", "valyrian", "wildfire", "wildling"];
var chosenWord = "";
var spelledOutdWord = [];
var emptySpotWord = 0;
var emptySpotAndCorrect = []; 
var wrongGuess = [];
var winCount = 0;
var loseCount = 0;
var guessesRemaining = 6;

// functions
function startGame () {
    chosenWord = gameOfWords[Math.floor(Math.random() * gameOfWords.length)];
    spelledOutdWord = chosenWord.split("");
    emptySpotWord = spelledOutdWord.length;

    guessesRemaining = 6;
    wrongGuess = [];
    emptySpotAndCorrect = [];

    // filling in correct guesses
    for (var i = 0; i < emptySpotWord; i++) {
        emptySpotAndCorrect.push("_");
    }

    document.getElementById("guessChosenWord").innerHTML = emptySpotAndCorrect.join(" ");
    document.getElementById("numberOfGuesses").innerHTML = guessesRemaining;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("loseCounter").innerHTML = loseCount;


        // console logs for testing
        console.log(chosenWord);
        console.log(spelledOutdWord);
        console.log(emptySpotWord);
        console.log(emptySpotAndCorrect);
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < emptySpotWord; i++) {
        if(chosenWord[i] == letter) {
            letterInWord = true;
            
        }
    }


    if (letterInWord) {
        for (var i = 0; i < emptySpotWord; i++) {
            if(chosenWord[i] == letter) {
                emptySpotAndCorrect[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesRemaining--        
    }
    console.log(emptySpotAndCorrect);


}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Lose Count: " + loseCount + " | Guesses Remaining " + guessesRemaining);

    // updating html with counts
    document.getElementById("numberOfGuesses").innerHTML = guessesRemaining;
    document.getElementById("guessChosenWord").innerHTML = emptySpotAndCorrect.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongGuess.join(" ");




    // check if player won
    if (spelledOutdWord.toString() == emptySpotAndCorrect.toString()) {
        winCount++;
        alert("Winner!");

        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }

    // check if player lost
    else if (guessesRemaining == 0) {
        loseCount++;
        alert("Winter has come... you lost.");

        document.getElementById("loseCounter").innerHTML = loseCount;

        startGame();
    }
    
}

// starts the game
startGame();

// register keyclicks

document.onkeyup = function(event) {
    var guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guessLetter);
    roundComplete();

    console.log(guessLetter);
}
