// Page load animations
const clickableElement = document.querySelector('.hover');

clickableElement.onclick = () => {
    const instructionsElement = document.querySelector('.instructions')
    const hoveredElement = document.querySelector('.hover')
    const clickLight1 = document.querySelector('.clickLight1')
    const clickDark = document.querySelector('.clickDark2')
    const onClick = document.querySelector('.onClickAnimation')
    const container = document.querySelector('.container')
    onClick.setAttribute("id", "onClickAppear")
    hoveredElement.setAttribute("id", "playVanish")
    clickLight1.setAttribute("id", "lightClicked")
    setTimeout(() => {
        clickDark.setAttribute("id", "darkClicked")
    }, 100);
    setTimeout(() => {
       clickableElement.remove()
       onClick.remove()
    }, 400);
    setTimeout(() => {
        instructionsElement.setAttribute("id", 'instructionsAnimate')
        console.log('test')
        container.setAttribute("id", "containerAppear");
     }, 200);
}
moveText()
function moveText() {
    const text = document.querySelector('.title')
    setTimeout(() => {
        text.style.transform = "translateY(0%)";
        text.style.transform = "scale(100%)";
        clickableElement.style.opacity = "100";
     }, 4200);
}