const textBox = document.querySelector('.textcard-text');
const tbText = document.createElement('div');
tbText.classList.add('tc-text');
tbText.textContent = 'Good Luck!!';
textBox.appendChild(tbText);

const textBoxOPick = document.querySelector('.textcard-oPick');
const tbOPick = document.createElement('div');
tbOPick.classList.add('tct-result');

const textBoxPPick = document.querySelector('.textcard-pPick');
const tbPPick = document.createElement('div');
tbPPick.classList.add('tct-result');

const oScoreBox = document.querySelector('#opp-score');
const pScoreBox = document.querySelector('#player-score');

const osText = document.createElement('div');
const psText = document.createElement('div');

osText.classList.add('os-text');
psText.classList.add('ps-text');

let playerScore = 0;
let computerScore = 0;
let counter = 0;

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


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    counter = 0;
    osText.textContent = `${computerScore}`;
    psText.textContent = `${playerScore}`;

    oScoreBox.appendChild(osText);
    pScoreBox.appendChild(psText);

    tbText.textContent = 'Score has been reset! Prepare for a new game!';
    textBox.appendChild(tbText);
}



function scoreUpdate(gameResult) {
    counter;

    if (gameResult === "winner") {
        playerScore += 1;
        computerScore += 0;
        osText.textContent = `${computerScore}`;
        psText.textContent = `${playerScore}`;
        tbOPick.textContent = `O: ${computerSelection}`;
        tbPPick.textContent = `Y: ${playerSelection}`;


        oScoreBox.appendChild(osText);
        pScoreBox.appendChild(psText);
        textBoxOPick.appendChild(tbOPick);
        textBoxPPick.appendChild(tbPPick);

        tbText.textContent = 'You won the round!';
        textBox.appendChild(tbText);

        if (playerScore === 3) {
            tbText.textContent = 'Congratulations! You won the game!';
            textBox.appendChild(tbText);
            resetGame();
            return;

        }
        counter++;
        return counter;
            
    } else if (gameResult === "loser") {
        playerScore += 0;
        computerScore += 1;
        osText.textContent = `${computerScore}`;
        psText.textContent = `${playerScore}`;
        tbOPick.textContent = `O: ${computerSelection}`;
        tbPPick.textContent = `Y: ${playerSelection}`;

        oScoreBox.appendChild(osText);
        pScoreBox.appendChild(psText);
        textBoxOPick.appendChild(tbOPick);
        textBoxPPick.appendChild(tbPPick);

        tbText.textContent = 'You lost the round.';
        textBox.appendChild(tbText);

        if (computerScore === 3) {
            tbText.textContent = 'Sorry! You lost the game.';
            textBox.appendChild(tbText);
            resetGame();
            return alert("Loser!!!");
        }
        counter++;
        return counter;

    // if round is a tie, no points are awarded and round is started over again
    } else if (gameResult === "tie"){
        playerScore += 0;
        computerScore += 0;

        osText.textContent = `${computerScore}`;
        psText.textContent = `${playerScore}`;
        tbOPick.textContent = `O: ${computerSelection}`;
        tbPPick.textContent = `Y: ${playerSelection}`;

        oScoreBox.appendChild(osText);
        pScoreBox.appendChild(psText);
        textBoxOPick.appendChild(tbOPick);
        textBoxPPick.appendChild(tbPPick);


        tbText.textContent = 'The round ends in a tie!';
        textBox.appendChild(tbText);

        counter++;
        return counter;
    }
}



// game() use for loop to cycle through 5 rounds before determining winner
function game() {
    playerScore;
    computerScore;

    gameResult = "";

    rock.addEventListener('click', function() {
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        scoreUpdate(gameResult);
        console.log(counter);
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(gameResult);
        return gameResult;
    });

    paper.addEventListener('click', function() {
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        scoreUpdate(gameResult);
        console.log(counter);
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(gameResult);
        return gameResult;
    });
    
    scissors.addEventListener('click', function() {
        playerSelection = 'scissors';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        scoreUpdate(gameResult);
        console.log(counter);
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(gameResult);
        return gameResult;
    });
}

// uses buttons to let user pick their choice
let playerPrompt;
let playerSelection;
let gameResult;
let computerSelection;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
game();