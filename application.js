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

//global variables
let playerPoint = (0);
let computerPoint = (0);
let draw = (0);
let rounds = (1);
//runs the game
game();
function game() {
    if (rounds <= 5) {
        playerPlay();
    } else {
        declareWinner();
    }
    // -- unused for now. Game will be re-written in a more efficient manner in the future to properly utilize a loop --
    // for(let i = 1; i <= 5; i++) {
    //     console.log(i)
    //     playerPlay();
    //     } 
    }


// Declares a random value, 'rock', 'paper', or 'scissors' for the computer player. Outputs the global variable: computerSelection
function computerPlay() {
    let gameValues = ['rock', 'paper', 'scissors'];
    let computerRandom = Math.floor(Math.random() * gameValues.length);
        if (computerRandom === 0) {
            return computerSelection = 'rock';
        } else if (computerRandom === 1) {
            return computerSelection = 'paper';
        } else if (computerRandom === 2) {
            return computerSelection = 'scissors';
        }
    }
// Takes input from the player. Outputs the global variable: playerSelection
function playerPlay() {
    let playerInput = prompt('Input "rock", "paper", or "scissors"')
    let playerOutput = playerInput.toLowerCase();
        if (playerOutput == 'rock' || playerOutput == 'paper' || playerOutput == 'scissors') {
            computerPlay();
            playerSelection = (playerOutput);
            return compareResults();
            //return console.log('Player: ' + playerSelection) + console.log('computer: ' + computerSelection);
        } else {
            console.log(`'${playerOutput}' is not a valid input. Please input "rock", "paper", or "scissors"`);
            
        }    
}
// compares results of playerSelection and computerSelection, outputs: computerPoint or playerPoint
function compareResults() {
    ('rock' > 'scissors');
    ('scissors' > 'paper');
    ('paper' > 'rock');
    if (playerSelection > computerSelection){
        playerPoint++
        rounds++
        console.log('Player: ' + playerSelection) + console.log('Computer: ' + computerSelection) + console.log('You have ' + playerPoint + ' points') + console.log('Computer has ' + computerPoint + ' points');
        game();
        return
    } else if (playerSelection < computerSelection) {
        computerPoint++
        rounds++
        console.log('Player: ' + playerSelection) + console.log('Computer: ' + computerSelection) + console.log('You have ' + playerPoint + ' points') + console.log('Computer has ' + computerPoint + ' points');
        game();
        return
    } else {
        console.log('Player: ' + playerSelection) + console.log('Computer: ' + computerSelection) + console.log('***Draw!***');
        draw++
        game();
    }
}
// Declares winner by comparing points
function declareWinner() {
    if (playerPoint > computerPoint) {
        console.log('You win!')
    } else {
        console.log('Computer wins!')
    }
}

