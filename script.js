let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! computer ${compChoice} beats your ${userChoice}`;
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;

    if (userChoice === "rock" && compChoice === "scissors") {
      userWin = true;
    } else if (userChoice === "paper" && compChoice === "rock") {
      userWin = true;
    } else if (userChoice === "scissors" && compChoice === "paper") {
      userWin = true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id").toLowerCase();
    playGame(userChoice);
  });
});