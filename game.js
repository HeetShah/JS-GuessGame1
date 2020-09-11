//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number?");
var guess = Number(stringGuess);

//check is guess is right
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}

//otherwise, check if guess is higher
else if (Number(guess > secretNumber)) {
  alert("Too high. Guess Again");
} else {
  alert("Too low. Guess Again");
}
//otherwise, check if lower
