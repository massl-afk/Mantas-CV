let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



// Generating target
const generateTarget = () => Math.floor(Math.random() * 10);
// Comparing guesses
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  const difference = (a, b) => Math.abs(a -b);
  if (currentHumanGuess == computerGuess){
    return true;
  } else if (difference(currentHumanGuess, target) < 
  difference(computerGuess, target)){
    return true;
  } else {
    return false;
  }
};

const zeroToNine = () => {
  if (humanGuessInput < 0){
    alert('You must enter number 0 or greater!');
  } else if (humanGuessInput > 9){
    alert('Your entered number must not be greater than 9!');
  }
};

const updateScore = (winner) => {
  if (winner === 'human'){
    humanScore = humanScore + 1;
  } else {
    computerScore = humanScore + 1;
  }
};

const advanceRound = () => currentRoundNumber = currentRoundNumber +1;