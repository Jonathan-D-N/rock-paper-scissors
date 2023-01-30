// Page load animations
const clickableElement = document.querySelector('.hover');
//Game Container
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
//Menu Container
const player = document.querySelector('.player')
const reset = document.querySelector('.reset')
const computer = document.querySelector('.computer')
//
const gameContainer = document.querySelector('.gameContainer')
const temp = document.querySelector('.gameContainer')
gameContainer.remove()
clickableElement.onclick = () => {
    //Container
    const container = document.querySelector('.container')
    //Instructions container
    const instructionsElement = document.querySelector('.instructions')
    //Play button elements
    const hoveredElement = document.querySelector('.hover')
    const clickLight1 = document.querySelector('.clickLight1')
    const clickDark = document.querySelector('.clickDark2')
    const onClick = document.querySelector('.onClickAnimation')
    onClick.setAttribute("id", "onClickAppear")
    hoveredElement.setAttribute("id", "playVanish")
    clickLight1.setAttribute("id", "lightClicked")
    clickableElement.remove()
    setTimeout(() => {
        clickDark.setAttribute("id", "darkClicked")
    }, 100);
    setTimeout(() => {
       onClick.remove()
    }, 400);
    setTimeout(() => {
        instructionsElement.setAttribute("id", 'instructionsAnimate')
        container.setAttribute("id", "containerAppear");
        container.append(gameContainer)
     }, 500);
     setTimeout(() => {
        rock.setAttribute("id", "rock")
     }, 800);
     setTimeout(() => {
        player.setAttribute("id", "player")
     }, 950);
     setTimeout(() => {
        paper.setAttribute("id", "paper")
     }, 1100);
     setTimeout(() => {
        reset.setAttribute("id", "reset")
     }, 1250);
     setTimeout(() => {
        scissors.setAttribute("id", "scissors")
     }, 1400);
     setTimeout(() => {
        computer.setAttribute("id", "computer")
     }, 1550);
}
//Adjust Rock Paper Scissors title text
moveText()
function moveText() {
    const text = document.querySelector('.title')
    setTimeout(() => {
        text.style.transform = "translateY(0%)";
        text.style.transform = "scale(100%)";
        clickableElement.style.opacity = "100";
     }, 4200);
}