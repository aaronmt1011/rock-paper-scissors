// getComputerChoice() randomdly decides computer pick between rock, paper, scissors

function getComputerChoice() {
    // comChoice variable uses Math.floor on Math.random to get a number between 1 - 3.
    let comChoice = Math.floor(Math.random() * (4 - 1) + 1);
    
    // if... else uses answer from above to pick between choices of rock, paper, scissors
    if ( comChoice === 1 ) {
        return "Rock";
    } else if ( comChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// playRound() uses 2 parameters to determine the winner
function playRound(playerSelection, computerSelection) {
    //


}