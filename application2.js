//This function runs the game
function game(){
    const gameValues = ["rock", "paper", "scissors"];
    let playerPoint = (0);
    let computerPoint = (0);
    let playerSelection;
    let computerSelection;
    return playerPlay()
//This function randomizes the computer's selection from gameValues
   // function computerRandom() {
     //   const gameValues = ["rock", "paper", "scissors"] * [~~(Math.random() * gameValues.length)];
   // }
//This function takes user input, forces lowercase, randomizes gameValues for computer selection
    function playerPlay(computerSelection, playerSelection){
        playerSelection = prompt('Input "rock", "paper", or "scissors"')
        playerSelection = playerSelection.toLowerCase();
        computerSelection = (gameValues[~~(Math.random() * gameValues.length)]);
            if (computerSelection == playerSelection) {
                console.log(`You picked ${playerSelection}, the computer picked ${computerSelection}. It's a draw!`);
                return (playerPlay());
            }
            //computer win
            else if (computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'paper' && playerSelection == 'rock' || computerSelection == 'scissors' && playerSelection == 'paper'){
                computerPoint = ++computerPoint;
                console.log('You lose! ' + computerSelection + ' beats ' + playerSelection + '!');
                return (loopGame());
            }
            //player win
            else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper'){
                playerPoint = ++playerPoint;
                console.log('You win! ' + playerSelection + ' beats ' + computerSelection + '!')
                return (loopGame());
            }
            //invalid input from player
            else {
                console.log(`${playerSelection } is not a valid input. Please input "rock", "paper", or "scissors"`)
                console.log(computerSelection);
                return (playerPlay());
            }
    }
    function loopGame() {
        console.log('Player points: ' + playerPoint)
        console.log('Computer points: ' + computerPoint)
        for(;computerPoint < (3) && playerPoint < (3);) {
            playerPlay();
        }
    }

}