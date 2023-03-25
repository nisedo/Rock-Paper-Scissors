function getRandomChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You won!";
  }

  return "You lose!";
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getRandomChoice();
    const result = getResult(playerChoice, computerChoice);
    document.getElementById(
      "result"
    ).innerHTML = `<b>${result}</b><br>You chose ${playerChoice}, the computer chose ${computerChoice}`;
  });
});
