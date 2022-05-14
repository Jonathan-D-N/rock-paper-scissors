//objectives: Create a rock paper scissors game played against the computer

//Pseudocode

// Assign function: computerPlay 
// computerPlay includes variables: rock , paper , scissors
// function: computerPlay activates upon user input from the: playerPlay function
// Upon user input computerPlay selects one of the three variables at random and returns the variable computerSelection

// assign function: playerPlay
// playerPlay includes variables: rock , paper , scissors
// User inputs one of 3 values: rock , paper , scissors (case insensitive)
// function returns variable: playerSelection

// assign function: runGame
// runGame includes variables: playerSelection , computerSelection
// runGame compares values of inputs from both variables
// declares a win , lose , or draw to the user based on input from playerSelection and computerSelection


function computerPlay() {
    let gameValues = ['rock', 'paper', 'scissors'];
    let randomValue = Math.floor(Math.random() * gameValues.length);
        if (randomValue === 0) {
            return ('rock');
        } else if (randomValue === 1) {
            return ('paper');
        } else if (randomValue === 2) {
            return ('scissors');
        }
    }

function playerPlay() {
    let playerInput = prompt('Input "rock", "paper", or "scissors"')
    let playerOutput = playerInput.toLowerCase();
        if (playerOutput == 'rock' || playerOutput == 'paper' || playerOutput == 'scissors') {
            return (playerOutput);
        } else {
            alert(`${playerOutput} is not a valid input. Please input "rock", "paper", or "scissors"`);
            playerPlay();
        }    
}

