let playerScore = (0)
let computerScore = (0)

//Output userInput from button click

const btn = document.querySelectorAll('button');
btn.forEach((button) => {
        button.addEventListener('click', () => {
        userInput = (button.className);
        game()
        return(userInput); 
    });
});

function game() {
    const choices = ['rock', 'paper', 'scissors']
//Takes user input and gets index of choices variable.
    userInputIndex = choices.indexOf(userInput);

//Computer choice
let randomNum = Math.floor(Math.random() * 3);
let computerChoice = choices[randomNum];
//
const user = document.querySelector('.playerChoice');
user.textContent = `Player Choice: ${userInput}`
const Computer = document.querySelector('.computerChoice');
Computer.textContent = `Computer Choice: ${computerChoice}`

//Multidimensional array to store and track results. T = Tie, W = Win, L = Loss.
    const results = [
        ['T', 'W', 'L'],
        ['L', 'T', 'W'],
        ['W', 'L', 'T'],
    ];
//Determines user and computer results. RandomNum is the computer result (up/down), userInputIndex is the user result (left/right)
let userResult = results[randomNum][userInputIndex];
//Determine and display score
if (userResult == 'W') {
    ++playerScore
    const playerScoreDisplay = document.querySelector('.playerScore');
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`
} else if (userResult == 'L') {
    ++computerScore
    const computerScoreDisplay = document.querySelector('.computerScore');
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
}

const resultMap = {
    'T': "It's a tie!",
    'W': "You win!",
    'L': "You lose!"
};
//displays Tie/Win/Loss
const roundResult = document.querySelector('.results');
roundResult.textContent = `Results: ${resultMap[userResult]}`
}
