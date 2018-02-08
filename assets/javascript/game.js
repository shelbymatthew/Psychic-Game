//These are the variables for the game
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z" ] ;
var wins = 0;
var losses = 0;
var guesses = 12;
var guessedLetters = [];

//This generates the computers guess
var computerGuess = options[Math.floor(Math.random()*options.length)];
//I left this in after testing, in case someone feels like cheating. Kinda like an easter egg!
console.log("Letter I'm thinking of: " + computerGuess)

//This allows the player to input their guesses
document.onkeyup = function() {
    var playerGuess = String.fromCharCode(event.keyCode).
        toLowerCase()
        guessedLetters.push(playerGuess);

//This determines if the player has guessed correctly, adds a win, alerts the player that they have won, and calls the resetGame function  
 if (playerGuess === computerGuess) {
     wins++;
     alert("You win!");
     resetGame()

//This happens if the player guessed incorrectly, and removes a guess
 } else {
     guesses--;
 }
 //This deterimines if the player is out of guesses, adds a loss, alerts the player that they have lost, and calls the resetGame funciton
 if (guesses=== 0){
     losses++;
     alert("You lose!");
     resetGame()
 }
//This function allows the game to start over
 function resetGame() {
    guesses = 12;
    guessedLetters = [];
    computerGuess = options[Math.floor(Math.random()*options.length)];
    console.log("Letter I'm thinking of: " + computerGuess);
  }

//This redoes the HTML of the page, to relect a playboard.
 var html = "<p>Try to guess what letting I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + losses + "</p>" +
        "<p>Guesses Remaining: " + guesses + "</p>" +
        "<p>Guessed Letters: " + guessedLetters.join(', ') + "</p>" ;
        
        document.getElementById("game").innerHTML = html;
           
}
