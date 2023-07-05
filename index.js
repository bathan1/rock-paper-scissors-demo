function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1

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

function playRound(playerSelection) {
    let computerSelection = getComputerChoice().toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                console.log("You Win! Rock beats Scissors");
                return 1;
            }
            else if (computerSelection == "rock") {
                console.log("You Tie! Rock ties Rock");
                return 0;
            }
            else {
                console.log("You Lose! Paper beats Rock");
                return -1;
            }
        case "scissors":
            if (computerSelection == "scissors") {
                console.log("You Tie! Scissors ties Scissors");
                return 0;
            }
            else if (computerSelection == "rock") {
                console.log("You Lose! Rock beats Scissors");
                return -1;
            }
            else {
                console.log("You Win! Scissors beats Paper");
                return 1;
            }   
        case "paper":
            if (computerSelection == "scissors") {
                console.log("You Lose! Scissors beats Paper");
                return -1;
            }
            else if (computerSelection == "rock") {
                console.log("You Win! Paper beats Rock");
                return 1;
            }
            else {
                console.log("You Tie! Paper ties Paper");
                return 0;
            }   
    }    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');

    rockButton.addEventListener('click', () => {
        playRound("rock");
    });
    paperButton.addEventListener('click', () => {
        playRound("paper");
    });
    scissorsButton.addEventListener('click', () => {
        playRound("scissors");
    });

    while (playerScore < 3 && computerScore < 3) {
        while (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
            playerSelection = prompt("Enter your choice:")
            playerSelection = playerSelection.toLowerCase();
            computerSelection = getComputerChoice();
        }
        gameResult = playRound(playerSelection, computerSelection);
    
        if (gameResult == -1) {
            computerScore++;
        }
        if (gameResult == 1) {
            playerScore++;
        }

        playerSelection = null;
    }

    if (playerScore == 3) {
        console.log("Congrats, you win!");
    }
    else {
        console.log("You lost, better luck next time!  :(");
    }
}