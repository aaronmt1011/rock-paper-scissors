const textBox = document.querySelector('.textcard');
const tbText = document.createElement('div');
tbText.classList.add('tc-text');


const oScoreBox = document.querySelector('#opp-score');
const pScoreBox = document.querySelector('#player-score');

const osText = document.createElement('div');
const psText = document.createElement('div');

osText.classList.add('os-text');
psText.classList.add('ps-text');

let playerScore = 0;
let computerScore = 0;


osText.textContent = `${computerScore}`;
psText.textContent = `${playerScore}`;

oScoreBox.appendChild(osText);
pScoreBox.appendChild(psText);



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
            return gameResult;
            // return "You Lose! Paper beats rock.";

        } else if (computerSelection === "scissors") {
        // rock beats scissors, user wins
            gameResult = "winner";
            return gameResult;
            // return "You Won! Rock beats scissors.";

        } else {
        // rock ties with rock, tie
            gameResult = "tie";
            return gameResult;
            // return "Tie! Rock ties with rock.";
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
        // scissors beats paper, user loses
            gameResult = "loser";
            return gameResult;
            // return "You Lose! Scissors beats paper.";

        } else if (computerSelection === "rock") {
        // paper beats rock, user wins
            gameResult = "winner";
            return gameResult;
            // return "You Won! Paper beats rock.";

        } else {
        // paper ties with paper, tie
            gameResult = "tie";
            return gameResult;
            // return "Tie! Paper ties with paper.";
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
        // rock beats scissors, user loses
            gameResult = "loser";
            return gameResult;
            // return "You Lose! Rock beats scissors.";

        } else if (computerSelection === "paper") {
        // scissors beats paper, user wins
            gameResult = "winner";
            return gameResult;
            // return "You Won! Scissors beats paper.";

        } else {
        // scissors ties with scissors, tie
            gameResult = "tie";
            return gameResult;
            // return "Tie! Scissors ties with scissors.";
        }
    }
}

// game() use for loop to cycle through 5 rounds before determining winner
function game() {
    playerScore = 0;
    computerScore = 0;


    osText.textContent = `${computerScore}`;
    psText.textContent = `${playerScore}`;

    oScoreBox.appendChild(osText);
    pScoreBox.appendChild(psText);

    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    
    // for loop is used to loop through this code 5 times (5 rounds)
    for (let i = 0; i < 5; i++) {
        // variables below are reset for each round before the if... else
        gameResult = "";




        /* 
            Fix Below
        */
        /*
        playerSelection = '';
        rock.onclick = () => playerSelection = 'rock';
        paper.onclick = () => playerSelection = 'paper';
        scissors.onclick = () => playerSelection = 'scissors';
        */
        

        
        // uses player input to get player choice
        /*
        playerPrompt = prompt("Please enter your choice between rock, paper, scissors. You have only " + (5-i) + " guesses left");
        playerSelection = playerPrompt.toLowerCase();
        */

        /* 
            Fix Below
        */


        // computerSelection uses function getComputerChoice() to get computer choice
        computerSelection = getComputerChoice();

        /*
        rock.addEventListener('click', function() {
            playerSelection = 'rock';
            return playerSelection;
        });

        paper.addEventListener('click', function() {
            playerSelection = 'paper';
            return playerSelection;
        });

        scissors.addEventListener('click', function() {
            playerSelection = 'scissors';
            return playerSelection;
        });
        */

        playRound(playerSelection, computerSelection);
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(gameResult);
        if (gameResult === "winner") {
            playerScore ++;
            osText.textContent = `${computerScore}`;
            psText.textContent = `${playerScore}`;

            oScoreBox.appendChild(osText);
            pScoreBox.appendChild(psText);

            tbText.textContent = 'You won the round!';
            textBox.appendChild(tbText);

            // ***
            if (playerScore === 3) {
                tbText.textContent = 'Congratulations! You won the game!';
                textBox.appendChild(tbText);
            }
            
        } else if (gameResult === "loser") {
            computerScore ++;
            osText.textContent = `${computerScore}`;
            psText.textContent = `${playerScore}`;

            oScoreBox.appendChild(osText);
            pScoreBox.appendChild(psText);

            tbText.textContent = 'You lost the round.';
            textBox.appendChild(tbText);

            // ***
            if (computerScore === 3) {
                tbText.textContent = 'Sorry! You lost the game.';
                textBox.appendChild(tbText);
            }

        // if round is a tie, no points are awarded and round is started over again
        } else if (gameResult === "tie"){
            tbText.textContent = 'The game ends in a tie!';
            textBox.appendChild(tbText);
            i--;
        }

        console.log(i);

        
        // calls playRound() to start round and display results
        /*
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        */


        /*
        // if... else uses gameResult to determine winner/loser/tie and then to determine who should receive the point
        // *** - another if... else statement is nestled within first couple of condititional statements that is used to return winner/loser of game 
        if (gameResult === "winner") {
            playerScore ++;
            osText.textContent = `${computerScore}`;
            psText.textContent = `${playerScore}`;

            oScoreBox.appendChild(osText);
            pScoreBox.appendChild(psText);

            tbText.textContent = 'You won the round!';
            textBox.appendChild(tbText);

            // ***
            if (playerScore === 3) {
                tbText.textContent = 'Congratulations! You won the game!';
                textBox.appendChild(tbText);
                break;
            }
            
        } else if (gameResult === "loser") {
            computerScore ++;
            osText.textContent = `${computerScore}`;
            psText.textContent = `${playerScore}`;

            oScoreBox.appendChild(osText);
            pScoreBox.appendChild(psText);

            tbText.textContent = 'You lost the round.';
            textBox.appendChild(tbText);

            // ***
            if (computerScore === 3) {
                tbText.textContent = 'Sorry! You lost the game.';
                textBox.appendChild(tbText);
                break;
            }


        // if round is a tie, no points are awarded and round is started over again
        } else if (gameResult === "tie"){
            tbText.textContent = 'The game ends in a tie!';
            textBox.appendChild(tbText);
            i--;
        } 
        */


        // this conditional statement is here to remind players to use rock, paper, scissors for answer and to restart the round
        /*else {
            console.log("You entered: " + playerSelection);
            console.log("Please use only - rock , paper , scissors");
            console.log(" ");
            i--;
        }
        */
    }  
}




        /* 
            Fix Below
        */
// uses buttons to let user pick their choice
let playerPrompt;
let playerSelection;
let gameResult;
let computerSelection;

// game();
rock.addEventListener('click', function() {
    playerSelection = 'rock';
    game();
});

paper.addEventListener('click', function() {
    playerSelection = 'paper';
    game();
});

scissors.addEventListener('click', function() {
    playerSelection = 'scissors';
    game();
});