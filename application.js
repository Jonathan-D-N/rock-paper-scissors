
//global variables
let playerPoint = (0);
let computerPoint = (0);
let rounds = (1);
let playerSelection;
let computerSelection;

// Declares a random value, 'rock', 'paper', or 'scissors' for the computer player. Call using the computerPlay() function.
const gameValues = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return gameValues[~~(Math.random() * gameValues.length)];
    }

//Take player input, force lowercase, compare results, add points for winner and add to rounds variable, loop function if a draw is met.
function playerPlay(computerSelection, playerSelection) {
    playerSelection = prompt('Input "rock", "paper", or "scissors"')
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') { 
        ('rock' > 'scissors');
        ('paper' > 'rock');
        ('scissors' > 'paper');
        if (computerSelection == playerSelection) {
            console.log('Draw!');
            return (playerPlay());
        } else if (computerSelection < playerSelection) {
            computerPoint = ++computerPoint;
            rounds = ++rounds;
            console.log('You lose! ' + computerSelection + ' beats ' + playerSelection + '!');
            console.log('Player Points: ', playerPoint);
            console.log('Computer Points: ', computerPoint);
        } else {
            playerPoint = ++playerPoint;
            rounds = ++rounds;
            console.log('You win! ' + playerSelection + ' beats ' + computerSelection + '!');
            console.log('Player Points: ', playerPoint);
            console.log('Computer Points: ', computerPoint);
        }
    } else {
        console.log(`${playerSelection } is not a valid input. Please input "rock", "paper", or "scissors"`)
        return (playerPlay());
    }
}
//runs the game until 5 rounds happen
function game() {
    while (rounds <= 5) {
        playerPlay();
    }
}
game();