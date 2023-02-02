const gameValues = ['rock', 'paper', 'scissors'];
let playerPoint = 0;
let computerPoint = 0;
let playerSelection;
let computerSelection;
let roundStatus;
const playerScoreVisual = document.querySelector('.playerScore')
const computerScoreVisual = document.querySelector('.computerScore')
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
        playerColor = "color:yellow";
        computerColor = "color:yellow";
        playerBackspaceText();
        computerBackspaceText();
    } else if (e == 'playerWin') {
        playerColor = "color:green";
        computerColor = "color:red";
        playerBackspaceText();
        computerBackspaceText();
        ++playerPoint;
        pointIncrease();
    } else if (e == 'computerWin') {
        playerColor = "color:red";
        computerColor = "color:green";
        playerBackspaceText();
        computerBackspaceText();
        ++computerPoint;
        pointIncrease();
    } else if (e == 'reset') {
        playerColor = "color:$primary-text-color";
        computerColor = "color:$primary-text-color";
        playerBackspaceText();
        playerSelection = 'Selection';
        computerBackspaceText();
        computerSelection = 'Selection';
        playerPoint = 0;
        computerPoint = 0;
        pointIncrease();
    }
}

function pointIncrease() {
    let playerStr = playerScoreVisual.innerHTML
    playerScoreVisual.innerHTML = playerStr.slice(0, -1);
    let computerStr = computerScoreVisual.innerHTML
    computerScoreVisual.innerHTML = computerStr.slice(0, -1)
    setTimeout(() => {
        playerScoreVisual.innerHTML = playerPoint;
        computerScoreVisual.innerHTML = computerPoint;
     }, 300);
}


let playerColor;
let computerColor;
let i = 0;
let b = 0;
let speed = 100;
let playerInteraction;
let computerInteraction;

function playerBackspaceText() {
        let playerStr = playerSelectionVisual.innerHTML;
        // let playerScoreStr = playerScoreVisual.innerHTML;
        // playerScoreVisual.innerHTML = playerScoreStr.slice(0, -1);
        playerSelectionVisual.innerHTML = playerStr.slice(0, -1);
        playerInteraction = false;
        interaction()
        if (playerStr.length > 0) {setTimeout(playerBackspaceText, speed)};
        if (playerStr.length == 0) {
            playerType()
        }
}

function playerType(){
    playerSelectionVisual.style = playerColor
    playerSelectionVisual.innerHTML += playerSelection.charAt(i);
    i++;
    if (playerSelectionVisual.innerHTML.length == playerSelection.length) {
        playerInteraction = true;
        interaction()
        i = 0  
    }
    if (playerSelectionVisual.innerHTML.length != playerSelection.length) {
    setTimeout(playerType, speed);
    }
}

function computerBackspaceText() {
    let computerStr = computerSelectionVisual.innerHTML;
    computerSelectionVisual.innerHTML = computerStr.slice(0, -1);
    computerInteraction = false;
    if (computerStr.length > 0) {setTimeout(computerBackspaceText, speed)};
    if (computerStr.length == 0) {
        computerType()
    }
}

function computerType(){
    computerSelectionVisual.style = computerColor
    computerSelectionVisual.innerHTML += computerSelection.charAt(b);
    b++;
    if (computerSelectionVisual.innerHTML.length == computerSelection.length) {
        computerInteraction = true;
        interaction()
        b = 0
    }
    if (computerSelectionVisual.innerHTML.length != computerSelection.length) {
    setTimeout(computerType, speed);
    }
}

function interaction() {
    if(playerInteraction == false && computerInteraction == false) {
        gameContainer.setAttribute("id", "unClickableGame")
        menu.setAttribute("id", "unClickableMenu")
    } else if (playerInteraction == true && computerInteraction == true) {
        gameContainer.removeAttribute("id", "unClickableGame")
        menu.removeAttribute("id", "unClickableMenu")
    }
}

const resetImage = document.querySelector('.resetImage')
resetImage.onclick = () => {
    displaySelections('reset')
   resetImage.style.transition = "all 250ms ease-in"
   resetImage.style.transform = `rotate(360deg)`;
   setTimeout(() => {
      resetImage.style.transition = "all 0ms ease-in-out"
      resetImage.style.transform = `rotate(0deg)`;
   }, 650);
}