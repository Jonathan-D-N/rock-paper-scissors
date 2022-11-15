const picks = ['rock', 'paper', 'scissors']
let userInput = ('')
let userInputIndex = ('')
let userScore = (0)
let computerScore = (0)
let rounds = (0)
for (; rounds < 3; rounds++) {
    gameRound()
}
//begins the game
function gameRound() {
//Takes user input and indexes it.
    userInput = prompt('Input "rock", "paper", or "scissors"').toLowerCase();
    userInputIndex = picks.indexOf(userInput);
//Validates that the user inputs a valid prompt, restarts game if not.
    validateUserInput();
    function validateUserInput() {
        if (userInputIndex == -1) {
            console.log(`${userInput} is not a valid input. Please enter "rock", "paper", or "scissors"`)
            return
        } 
    }

//Computer choice
let randomNum = Math.floor(Math.random() * 3);
let computerChoice = picks[randomNum];

//Log choices to the console
console.log(`You picked ${userInput}, the computer picked ${computerChoice}`);

//Multidimensional array to store and track results. T = Tie, W = Win, L = Loss.
    const results = [
        ['T', 'W', 'L'],
        ['L', 'T', 'W'],
        ['W', 'L', 'T'],
    ];
//Determines user and computer results. RandomNum is the computer result (up/down), userInputIndex is the user result (left/right)
let userResult = results[randomNum][userInputIndex];
//Decreases rounds loop if there's a tie. The goal is best 2 out of 3.
if (userResult == 'T') {
    rounds--
}
const resultMap = {
    'T': "It's a tie!",
    'W': "You win!",
    'L': "You lose!"
};
console.log(resultMap[userResult]);
return(resultMap[userResult]);
}
