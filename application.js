const picks = ['rock', 'paper', 'scissors']


//Write a function with 2 arguments that will be passed in to it. 1st argument will hold the player input, 2nd will hold the computer input.
//Upon running this function, prompt the user to input text. Store the text on 1st argument and run the next function.
//the next function will randomize the 'picks' variable and store the information on the 2nd argument. After doing this, run the next (3rd) function.
//3rd function will take argument 1 and 2 and compare them. Once compared, it will console.log the winner.


//Begins the game. user inputer is stored on the first argument. Computer input is stored on the second argument.
function runGame (playerInput, computerInput) {
    playerInput = prompt ('Input "rock", "paper", or "scissors"');
    //runs the computerChoice function, passing the 'picks' variable as the argument. The function will randomize that variable (array) and return 1 randomized output.
    computerChoice(picks)
    //This function runs the Durstenfeld shuffle to shuffle the array. I'm then calling the array position 0 which will be compared to userinput.
    //May not be appropriate for this project. May need to adjust to just a: let randomNum = Math.floor(Math.random() * 3);
    function computerChoice(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        } console.log (array[0])
//brainstorm ways to compare userinput and computerinput without if else statements.

    }
}


//Function that prompts the player for input. Once correct input is received, runs the game.
//    This function calls the picks variable and randomizes it to pick the computer play
//      