// getComputerChoice() randomdly decides computer pick between rock, paper, scissors

function getComputerChoice() {
    // comChoice variable uses Math.floor on Math.random to get a number between 1 - 3.
    let comChoice = Math.floor(Math.random() * (4 - 1) + 1);
    
    // if... else uses answer from above to pick between choices of rock, paper, scissors
    if (comChoice === 1 ) {
        return "rock";
    } else if (comChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// playRound() uses 2 parameters to determine the winner
function playRound(playerSelection, computerSelection) { 
    // uses if... else to determine winner
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
        // paper beats rock, user loses
            gameResult = "loser";
            return "You Lose! Paper beats rock.";
        } else if (computerSelection === "scissors") {
        // rock beats scissors, user wins
            gameResult = "winner";
            return "You Won! Rock beats scissors.";
        } else {
        // rock ties with rock, tie
            gameResult = "tie";
            return "You tie! Rock ties with rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
        // scissors beats paper, user loses
            gameResult = "loser";
            return "You Lose! Scissors beats paper.";
        } else if (computerSelection === "rock") {
        // paper beats rock, user wins
            gameResult = "winner";
            return "You Won! Paper beats rock.";
        } else {
        // paper ties with paper, tie
            gameResult = "tie";
            return "You tie! Paper ties with paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
        // rock beats scissors, user loses
            gameResult = "loser";
            return "You Lose! Rock beats scissors.";
        } else if (computerSelectin === "paper") {
        // scissors beats paper, user wins
            gameResult = "winner";
            return "You Won! Scissors beats paper.";
        } else {
        // scissors ties with scissors, tie
            gameResult = "tie";
            return "You tie! Scissors ties with scissors.";
        }
    }
}


// game() use for loop to cycle through 5 rounds before determining winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    

    for (let i = 0; i < 5; i++) {
        if (gameResult === "winner") {
            playRound(playerSelection, computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            playerScore ++;
            console.log(playerScore);
        } else if (gameResult === "loser") {
            playRound(playerSelection, computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            computerScore ++;
            console.log(computerScore);
        } else {
            playRound(playerSelection, computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            playerScore += 1;
            computerScore += 1;
        }
    }
}


// uses windows prompt to let user pick their choice
let playerPrompt = prompt("Please enter your choice between rock, paper, scissors");
let playerSelection = playerPrompt.toLowerCase();
let gameResult;
const computerSelection = getComputerChoice();