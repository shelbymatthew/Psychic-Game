var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z" ] ;
var wins = 0;
var losses = 0;
var guesses = 8;
var guessedLetters = [];

document.onkeyup = function() {
    var playerGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
        guessedLetters.push(playerGuess);

 var computerGuess = options[Math.floor(Math.random()*options.length)];

 if (playerGuess === computerGuess) {
     wins++, guesses = 8;
     alert("You win!");
 } else {
     guesses--;
 }
 if (guesses=== 0){
     losses++, guesses = 8;
     alert("You lose!")
 }

 var html = "<p>Guess what letter I'm thinking of:</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + losses + "</p>" +
        "<p>Guesses Remaining: " + guesses + "</p>" +
        "<p>Guessed Letter: " + guessedLetters.join(', ') + "</p>" ; //Show guessed     letters heredocument.querySelector("#psychicAct").innerHTML = html;
        
        document.getElementById("game").innerHTML = html;
           
}
