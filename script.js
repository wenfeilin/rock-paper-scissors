function getComputerChoice() {
  const randomNum = Math.floor((Math.random() * 3)) + 1;
  let computerChoice = "";

  switch (randomNum) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    case 3:
      computerChoice = "paper";
      break;
  }

  return computerChoice;
}

function getHumanChoice() {
  return prompt("Pick rock, paper, or scissors.");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice, computerChoice) {
  const humanChoiceLowerCase = humanChoice.toLowerCase();
  
  // User draws with computer.
  if (humanChoiceLowerCase === computerChoice) {
    console.log(`It's a draw! You and the computer both chose ${computerChoice}.`);
  } else {
    // User win scenarios:
    if ((humanChoiceLowerCase === "rock") && (computerChoice === "scissors") ||
        (humanChoiceLowerCase === "scissors") && (computerChoice === "paper") ||
        (humanChoiceLowerCase === "paper") && (computerChoice === "rock") ) {
      console.log(`You win! ${capitalize(humanChoiceLowerCase)} beats ${computerChoice}.`);
      humanScore++;
    } else {
      // User loses.
      console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoiceLowerCase}.`);
      computerScore++;
    }
  }
}

/* Total Scores */
let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

/* 
For testing:
console.log(`Human: ${humanScore}`);
console.log(`Computer: ${computerScore}`);
*/