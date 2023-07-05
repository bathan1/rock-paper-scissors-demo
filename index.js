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

function playRound(playerSelection, lastPlay) {
    let computerSelection = getComputerChoice().toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                lastPlay.textContent = "You Win! Rock beats Scissors";
                return 1;
            }
            else if (computerSelection == "rock") {
                lastPlay.textContent = "You Tie! Rock ties Rock";
                return 0;
            }
            else {
                lastPlay.textContent = "You Lose! Paper beats Rock";
                return -1;
            }
        case "scissors":
            if (computerSelection == "scissors") {
                lastPlay.textContent = "You Tie! Scissors ties Scissors";
                return 0;
            }
            else if (computerSelection == "rock") {
                lastPlay.textContent = "You Lose! Rock beats Scissors";
                return -1;
            }
            else {
                lastPlay.textContent = "You Win! Scissors beats Paper";
                return 1;
            }   
        case "paper":
            if (computerSelection == "scissors") {
                lastPlay.textContent = "You Lose! Scissors beats Paper";
                return -1;
            }
            else if (computerSelection == "rock") {
                lastPlay.textContent = "You Win! Paper beats Rock";
                return 1;
            }
            else {
                lastPlay.textContent = "You Tie! Paper ties Paper";
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


    const gameInfo = document.querySelector('#gameInfo');
    const lastPlay = document.querySelector('#lastPlay')
    const userScoreDisplay = document.querySelector('#userScore');
    const computerScoreDisplay = document.querySelector('#computerScore');

        // @ts-ignore
    rockButton.addEventListener('click', () => {
        roundDecision = playRound("rock", lastPlay);
        handleRoundDecision(roundDecision);
    });
    // @ts-ignore
    paperButton.addEventListener('click', () => {
        roundDecision = playRound("paper", lastPlay);
        handleRoundDecision(roundDecision);
    });
    // @ts-ignore
    scissorsButton.addEventListener('click', () => {
        roundDecision = playRound("scissors", lastPlay);
        handleRoundDecision(roundDecision);
    });

    function handleRoundDecision(decision) {
        const checkGameOver = document.getElementById('gameOver');
        if (checkGameOver !== null) {
            gameInfo?.removeChild(checkGameOver);
        }

        if (decision == 1) {
            userScore++;
        } else if (decision == -1) {
            computerScore++;
        }

        // @ts-ignore
        userScoreDisplay.textContent = "You: " + userScore;
        // @ts-ignore
        computerScoreDisplay.textContent = "Computer: " + computerScore;

        if (userScore == 5) {
            const gameOverMsg = document.createElement('div');
            gameOverMsg.id = 'gameOver';
            gameOverMsg.textContent = "Congrats, you win!";
            gameInfo?.appendChild(gameOverMsg);

            // @ts-ignore
            userScoreDisplay.textContent = "You: ";
            // @ts-ignore
            computerScoreDisplay.textContent = "Computer: ";

            userScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            const gameOverMsg = document.createElement('div');
            gameOverMsg.className = "infoMsg";
            gameOverMsg.id = 'gameOver';
            gameOverMsg.textContent = "Better luck next time!";
            gameInfo?.appendChild(gameOverMsg);

            // @ts-ignore
            userScoreDisplay.textContent = "You: ";
            // @ts-ignore
            computerScoreDisplay.textContent = "Computer: ";

            userScore = 0;
            computerScore = 0;
        }
        
    }
}


game();