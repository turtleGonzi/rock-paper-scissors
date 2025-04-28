let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const text = document.querySelector(".divText");


const getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "sccisors";
  }
};

const updateScore = function(){
    const divHumanScore = document.querySelector(".humanScore");
    const divComputerScore = document.querySelector(".computerScore");
    divHumanScore.textContent = humanScore;
    divComputerScore.textContent = computerScore;
}

const playRound = function (humanChoice) {
  const computerChoice = getComputerChoice();
  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "sccisors") ||
    (computerChoice === "sccisors" && humanChoice === "rock")
  ) {
    humanScore++;
    text.textContent = `You win! Your ${humanChoice} beats ${computerChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "sccisors") ||
    (humanChoice === "sccisors" && computerChoice === "rock")
  ) {
    computerScore++;
    text.textContent = `You lose! Computers ${computerChoice} beats ${humanChoice}`;
  } else {
    text.textContent = "It's a draw.";
  }
  updateScore();
  if(humanScore === 5 || computerScore === 5){
    checkWinner()
  }
};

const checkWinner = function () {
  if (computerScore > humanScore) {
    text.textContent =`Computer won. Human ${humanScore} : Computer ${computerScore}`;
  } else if (humanScore > computerScore) {
    text.textContent = `You won. Human ${humanScore} : Computer ${computerScore}`;
  } else {
    text.textContent = `It's a draw. Human ${humanScore} : Computer ${computerScore}`;
  }
};

for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    switch (e.target.className) {
      case "rock":
        playRound("rock");
        break;
      case "paper":
        playRound("paper");
        break;
      case "sccisors":
        playRound("sccisors");
        break;
    }
  });
}
