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