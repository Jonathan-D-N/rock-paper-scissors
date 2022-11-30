const picks = ['rock', 'paper', 'scissors']
let userInput = ('')
let userInputIndex = ('')
let userScore = (0)
let computerScore = (0)
let rounds = (0)
//for (; rounds < 3; rounds++) {
//    gameRound()
//}


const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        userInput = (button.className);
        gameRound()
        return(userInput);
    });
});



function gameRound() {
//Takes user input and indexes it.
    userInputIndex = picks.indexOf(userInput);
    console.log("userInput Index: ", userInputIndex);

//Computer choice
let randomNum = Math.floor(Math.random() * 3);
let computerChoice = picks[randomNum];

//Log choices to the console

//console.log(`You picked ${userInput}, the computer picked ${computerChoice}`);

const user = document.querySelector('.playerChoice')
user.textContent = `Player Choice: ${userInput}`

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
