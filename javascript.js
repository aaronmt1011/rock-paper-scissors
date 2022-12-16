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
            return "You Lose! Paper beats rock.";
        } else if (computerSelection === "scissors") {
        // rock beats scissors, user wins
            return "You Won! Rock beats scissors.";
        } else {
        // rock ties with rock, tie
            return "You tie! Rock ties with rock.";
        }
        
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
        // scissors beats paper, user loses
            return "You Lose! Scissors beats paper.";
        } else if (computerSelection === "rock") {
        // paper beats rock, user wins
            return "You Won! Paper beats rock.";
        } else {
        // paper ties with paper, tie
            return "You tie! Paper ties with paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
        // rock beats scissors, user loses
            return "You Lose! Rock beats scissors.";
        } else if (computerSelection === "paper") {
        // scissors beats paper, user wins
            return "You Won! Scissors beats paper.";
        } else {
        // scissors ties with scissors, tie
            return "You tie! Scissors ties with scissors.";
        }
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));