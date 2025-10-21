const score = document.getElementById("score");
let humanScore = 0;
let computerScore = 0;

let updateScore = (code) => {
    if (code === 1) {
        humanScore++;
    } else {
        computerScore++;
    }
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

let getComputerChoice = () => {
    let randomNum = Math.random();
    let choice = null;
    if (randomNum < .66 && randomNum > .33) {
        choice = "paper";
    } else if (randomNum > .66) {
        choice = "rock";
    } else {
        choice = "scissors";
    }
    return choice
}

let playRound = (human, computer) => {
    if (human === "paper" && computer === "rock") {
        updateScore(1);
        return "Human wins! Paper beats rock!";
    } else if (human === "rock" && computer === "scissors") {
        updateScore(1);
        return "Human wins! Rock beats scissors!";
    } else if (human === "scissors" && computer === "paper") {
        updateScore(1);
        return "Human wins! Scissors beat paper";
    } else if (computer === "paper" && human === "rock") {
        updateScore(2);
        return "Computer wins! Paper beats rock!";
    } else if (computer === "rock" && human === "scissors") {
        updateScore(2);
        return "Computer wins! Rock beats scissors!";
    } else if (computer === "scissors" && human === "paper") {
        updateScore(2);
        return "Computer wins! Scissors beat paper";
    } else {
        return `It's a draw! You put ${human} and Computer put ${computer}.`;
    }
}

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const winTag = document.getElementById("winText");

rockBtn.addEventListener("click", (e) => {
    const comp = getComputerChoice();
    winTag.textContent = playRound("rock", comp);
});
scissorsBtn.addEventListener("click", (e) => {
    const comp = getComputerChoice();
    winTag.textContent = playRound("scissors", comp);
});
paperBtn.addEventListener("click", (e) => {
    const comp = getComputerChoice();
    winTag.textContent = playRound("paper", comp);
});