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
        playerColor = "color:yellow"
        computerColor = "color:yellow"
        playerBackspaceText()
        computerBackspaceText()
    } else if (e == 'playerWin') {
        playerColor = "color:green"
        computerColor = "color:red"
        playerBackspaceText()
        computerBackspaceText()
        playerScore.innerHTML = ++playerPoint
    } else if (e == 'computerWin') {
        playerColor = "color:red"
        computerColor = "color:green"
        playerBackspaceText()
        computerBackspaceText()
        computerScore.innerHTML = ++computerPoint
    }
}
let playerColor;
let computerColor;
let i = 0;
let b = 0;
let speed = 100;

function playerBackspaceText() {
    let playerStr = playerSelectionVisual.innerHTML;
        playerSelectionVisual.innerHTML = playerStr.slice(0, -1);
        if (playerStr.length > 0) {setTimeout(playerBackspaceText, speed)};
        if (playerStr.length == 0) {
            playerType()
        }
}

function playerType(){
    playerSelectionVisual.style = playerColor
    playerSelectionVisual.innerHTML += playerSelection.charAt(i);
    i++;
    console.log(i)
    if (playerSelectionVisual.innerHTML.length == playerSelection.length) {
        i = 0
    }
    if (playerSelectionVisual.innerHTML.length != playerSelection.length) {
    setTimeout(playerType, speed);
    }
}

function computerBackspaceText() {
    let computerStr = computerSelectionVisual.innerHTML;
    computerSelectionVisual.innerHTML = computerStr.slice(0, -1);
    if (computerStr.length > 0) {setTimeout(computerBackspaceText, speed)};
    if (computerStr.length == 0) {
        computerType()
    }
}

function computerType(){
    computerSelectionVisual.style = computerColor
    computerSelectionVisual.innerHTML += computerSelection.charAt(b);
    b++;
    console.log(b)
    if (computerSelectionVisual.innerHTML.length == computerSelection.length) {
        b = 0
    }
    if (computerSelectionVisual.innerHTML.length != computerSelection.length) {
    setTimeout(computerType, speed);
    }
}