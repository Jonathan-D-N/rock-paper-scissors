const gameValues = ['rock', 'paper', 'scissors'];
let playerPoint = 0;
let computerPoint = 0;
let playerSelection;
let computerSelection;
let roundStatus;
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const playerSelectionVisual = document.querySelector('.playerSelection')
const computerSelectionVisual = document.querySelector('.computerSelection')
function getRandomSelection() {
    computerSelection = (gameValues[~~(Math.random() * gameValues.length)]);
    compareSelections()
}

gameContainer.onclick = (e) => {
    if (e.target.parentNode.className == 'rock' || e.target.className == 'rock') {
        playerSelection = 'rock'
        getRandomSelection()
        console.log('computerSelection: ', computerSelection)
        console.log('playerSelection: ', playerSelection)
    } else if (e.target.parentNode.className == 'paper' || e.target.className == 'paper') {
        playerSelection = 'paper'
        getRandomSelection()
        console.log('computerSelection: ', computerSelection)
        console.log('playerSelection: ', playerSelection)
    } else if (e.target.parentNode.className == 'scissors' || e.target.className == 'scissors') {
        playerSelection = 'scissors'
        getRandomSelection()
        console.log('computerSelection: ', computerSelection)
        console.log('playerSelection: ', playerSelection)
    }
}

function compareSelections() {
    //draw
    if (playerSelection === computerSelection) {
        displaySelections('draw')
    //player win
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        displaySelections('playerWin')
    //computer win
    } else if (computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'paper' && playerSelection == 'rock' || computerSelection == 'scissors' && playerSelection == 'paper') {
        displaySelections('computerWin')
    }
}
function displaySelections(e) {
    if (e == 'draw') {
        playerSelectionVisual.style = "color:red"
        playerSelectionVisual.innerHTML = playerSelection
        computerSelectionVisual.style = "color:red"
        computerSelectionVisual.innerHTML = computerSelection
    } else if (e == 'playerWin') {
        playerSelectionVisual.style = "color:green"
        playerSelectionVisual.innerHTML = playerSelection
        computerSelectionVisual.style = "color:red"
        computerSelectionVisual.innerHTML = computerSelection
    } else if (e == 'computerWin') {
        playerSelectionVisual.style = "color:red"
        playerSelectionVisual.innerHTML = playerSelection
        computerSelectionVisual.style = "color:green"
        computerSelectionVisual.innerHTML = computerSelection
    }
}

