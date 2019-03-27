




alert("Pick either letter 'a' or 'b'...")

var computerChoices = ["a", "b"];




var winScore = 0;
var lossScore = 0;
var guesses = 10;
var guessLog = []

document.onkeyup = function(event) {
    userGuess = event.key;
    guesses--;

   
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userWins = document.getElementById("wins");
    var userLosses = document.getElementById("losses");
    var guessesLeft = document.getElementById("guesses");
    guessesLeft.textContent = guesses;



    guessLog.push(userGuess)
    var guessUpdate = document.getElementById("guessLog");
    guessUpdate.textContent = guessLog;







   
    if (userGuess === computerGuess) {
        winScore++;
        userWins.textContent = winScore;
    } else {
        lossScore++;
        userLosses.textContent = lossScore;
    }
    if (guesses === 0) {
        alert("Game Over! Press 'ok' to play again...")
        lossScore = 0;
        winScore = 0;
        guesses = 10;
        userWins.textContent = winScore;
        userLosses.textContent = lossScore;
        guessesLeft.textContent = guesses;
        guessLog = [];
        guessUpdate.textContent = guessLog;


    }
    
}


