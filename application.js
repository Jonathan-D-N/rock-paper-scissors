const picks = ['rock', 'paper', 'scissors']

//Entire game is contained within this function. Defines user input inside the 'input' variable, runs userInput function.
function runGame () {
    let input = ('');
    userInput();
//Gains user input
function userInput () {
    input = prompt ('Input "rock", "paper", or "scissors"')
    if (input.toLowerCase == ('rock', 'paper', 'scissors')) {
        //run next function
    } else {
        console.log ('Invalid input. Please input "rock", "paper", or "scissors"')
        return(userInput);
    }
} console.log (input);
}

//Function that prompts the player for input. Once correct input is received, runs the game.
//    This function calls the picks variable and randomizes it to pick the computer play
//      