let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  //   console.log("Game was draw");
  msg.innerHTML = "Game is draw play again";
  msg.style.backgroundColor = "#000";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("User Win");
    msg.innerHTML = "You Win";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("User lose");
    msg.innerHTML = "You Lose";
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  //   console.log("comp choice =", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("Choices are cliked", userChoice);
    playGame(userChoice);
  });
});
