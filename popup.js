function getRandomChoice() {
  const choices = ["pierre", "papier", "ciseaux"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Égalité !";
  }

  if (
    (playerChoice === "pierre" && computerChoice === "ciseaux") ||
    (playerChoice === "papier" && computerChoice === "pierre") ||
    (playerChoice === "ciseaux" && computerChoice === "papier")
  ) {
    return "Vous gagnez !";
  }

  return "Vous perdez !";
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getRandomChoice();
    const result = getResult(playerChoice, computerChoice);
    document.getElementById(
      "resultat"
    ).innerHTML = `<b>${result}</b><br>Vous avez choisi ${playerChoice}, l'ordinateur a choisi ${computerChoice}`;
  });
});
