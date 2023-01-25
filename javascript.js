/*
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
            return "Tie! Rock ties with rock.";
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
            return "Tie! Paper ties with paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
        // rock beats scissors, user loses
            gameResult = "loser";
            return "You Lose! Rock beats scissors.";
        } else if (computerSelection === "paper") {
        // scissors beats paper, user wins
            gameResult = "winner";
            return "You Won! Scissors beats paper.";
        } else {
        // scissors ties with scissors, tie
            gameResult = "tie";
            return "Tie! Scissors ties with scissors.";
        }
    }
}

// game() use for loop to cycle through 5 rounds before determining winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    // for loop is used to loop through this code 5 times (5 rounds)
    for (let i = 0; i < 5; i++) {
        // variables below are reset for each round before the if... else
        gameResult = "";

        // uses player input to get player choice
        playerPrompt = prompt("Please enter your choice between rock, paper, scissors. You have only " + (5-i) + " guesses left");
        playerSelection = playerPrompt.toLowerCase();

        // computerSelection uses function getComputerChoice() to get computer choice
        computerSelection = getComputerChoice();

        // calls playRound() to start round and display results
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        
        // if... else uses gameResult to determine winner/loser/tie and then to determine who should receive the point
        // *** - another if... else statement is nestled within first couple of condititional statements that is used to return winner/loser of game 
        if (gameResult === "winner") {
            playerScore ++;
            console.log("Your score is: " + playerScore);
            console.log("The computer score is: " + computerScore);
            console.log(" ");
            // ***
            if (playerScore === 3) {
                return alert("Congratulations! You won the game!");
            } else if (computerScore === 3) {
                return alert("Sorry! You lost the game.");
            }
        } else if (gameResult === "loser") {
            computerScore ++;
            console.log("Your score is: " + playerScore);
            console.log("The computer score is: " + computerScore);
            console.log(" ");
            // ***
            if (playerScore === 3) {
                return alert("Congratulations! You won the game!");
            } else if (computerScore === 3) {
                return alert("Sorry! You lost the game.");
            }
        // if round is a tie, no points are awarded and round is started over again
        } else if (gameResult === "tie"){
            console.log("Your score is: " + playerScore);
            console.log("The computer score is: " + computerScore);
            console.log(" ");
            i--;
        // this conditional statement is here to remind players to use rock, paper, scissors for answer and to restart the round
        } else {
            console.log("You entered: " + playerSelection);
            console.log("Please use only - rock , paper , scissors");
            console.log(" ");
            i--;
        }
    }  
}

// uses windows prompt to let user pick their choice
let playerPrompt;
let playerSelection;
let gameResult;
let computerSelection = getComputerChoice();
alert("Use console to see results of game. Best out of 5 rounds. Try to win 3 games first. Ties count as no win for both sides.");
game();
*/