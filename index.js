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
    let roundDecision;
    let userScore = 0;
    let computerScore = 0;

    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');

    const userScoreDisplay = document.querySelector('#userScore');
    const computerScoreDisplay = document.querySelector('#computerScore');

        // @ts-ignore
    rockButton.addEventListener('click', () => {
        roundDecision = playRound("rock");
        handleRoundDecision(roundDecision);
    });
    // @ts-ignore
    paperButton.addEventListener('click', () => {
        roundDecision = playRound("paper");
        handleRoundDecision(roundDecision)
    });
    // @ts-ignore
    scissorsButton.addEventListener('click', () => {
        roundDecision = playRound("scissors");
        handleRoundDecision(roundDecision)
    });

    function handleRoundDecision(decision) {
        if (decision == 1) {
            userScore++;
        } else if (decision == -1) {
            computerScore++;
        }

        // @ts-ignore
        userScoreDisplay.textContent = userScore;
        // @ts-ignore
        computerScoreDisplay.textContent = computerScore;
    }

    if (userScore == 3) {
        console.log("congrats you win");
    } else if (computerScore == 3) {
        console.log("better luck next time");
    }
}
game();