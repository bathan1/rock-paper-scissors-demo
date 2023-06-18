function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1

    if (num == 1) {
        return "Rock";
    }
    else if (num == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                return "You Win! Rock beats Scissors";
            }
            else if (computerSelection == "rock") {
                return "You Tie! Rock ties Rock";
            }
            else {
                return "You Lose! Paper beats Rock";
            }
        case "scissors":
            if (computerSelection == "scissors") {
                return "You Tie! Scissors ties Scissors";
            }
            else if (computerSelection == "rock") {
                return "You Lose! Rock beats Scissors";
            }
            else {
                return "You Win! Scissors beats Paper";
            }   
        case "paper":
            if (computerSelection == "scissors") {
                return "You Lose! Scissors beats Paper";
            }
            else if (computerSelection == "rock") {
                return "You Win! Paper beats Rock";
            }
            else {
                return "You Tie! Paper ties Paper";
            }   
    }    
}

let playerSelection = "paper"
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))