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
  return prompt("Pick rock, paper, or scissors.").toLowerCase();
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function printScore(humanScore, computerScore) {
  console.log(`You: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

function determineWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    return "draw";
  } else {
    return humanScore > computerScore ? "human" : "computer";
  }
}

function printWinner(winner, numRounds) {
  const openingMsg = `After ${numRounds} rounds of intense rock, paper, and scissors between you \
                      and the computer,`;

  if (winner === "draw") {
    console.log(`${openingMsg} it's a draw.`);
    return;
  }

  if (winner === "human") {
    console.log(`${openingMsg} you have come out on top! Congratulations!`);
  } else {
    console.log(`${openingMsg} you have been defeated by the computer. Better luck next time!`);
  }
}

function printFinalScores(humanScore, computerScore) {
  console.log("===== Final Scores =====");
  printScore(humanScore, computerScore);
  console.log("========================");
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    // User draws with computer.
    if (humanChoice === computerChoice) {
      console.log(`It's a draw! You and the computer both chose ${computerChoice}.`);
      return;
    }

    // User win scenarios: rock beats scissors, scissors beats paper, paper beats rock.
    if ((humanChoice === "rock") && (computerChoice === "scissors") ||
        (humanChoice === "scissors") && (computerChoice === "paper") ||
        (humanChoice === "paper") && (computerChoice === "rock") ) {
      console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
      humanScore++;
    } else {
      // User loses.
      console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
      computerScore++;
    }
  }
  
  /* Total Scores */
  let humanScore = 0;
  let computerScore = 0;
  
  const rounds = 5;

  // Play for 5 rounds.
  for (let i = 0; i < rounds; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    printScore(humanScore, computerScore);
  }

  // Declare the winner and display final scores!
  const winner = determineWinner(humanScore, computerScore);
  printWinner(winner, rounds);
  printFinalScores(humanScore, computerScore);
}

playGame();