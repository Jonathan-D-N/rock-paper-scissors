const picks = ['rock', 'paper', 'scissors']
//User Choice
let userInput = prompt('Input "rock", "paper", or "scissors"').toLowerCase();
let userInputIndex = picks.indexOf(userInput);

//Computer choice
let randomNum = Math.floor(Math.random() * 3);
let computerChoice = picks[randomNum];

//Log choices to the console
console.log(`You picked ${userInput}, the computer picked ${computerChoice}`);

//2D array
    const results = [
        ['T', 'W', 'L'],
        ['L', 'T', 'W'],
        ['W', 'L', 'T'],
    ];
    console.log(results);
//
let userResult = results[randomNum][userInputIndex];
//console.log('UserResult',userResult)

const resultMap = {
    'T': "Tie",
    'W': "You win",
    'L': "You lose"
};
console.log(resultMap[userResult]);
