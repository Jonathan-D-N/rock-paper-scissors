// Page load animations
const hoverPlay = document.querySelector('.play');
hoverPlay.onclick = () => {
    const playElement = document.querySelector('.play')
    const clickLight1 = document.querySelector('.clickLight1')
    const clickDark = document.querySelector('.clickDark2')
    const clickPlay = document.querySelector('.clickPlay')
    const onClick = document.querySelector('.onClickAnimation')
    const container = document.querySelector('.container')
    onClick.setAttribute("id", "onClickAppear")
    playElement.setAttribute("id", "playVanish")
    clickLight1.setAttribute("id", "lightClicked")
    setTimeout(() => {
        clickDark.setAttribute("id", "darkClicked")
        clickPlay.setAttribute("id", "playClicked")
    }, 100);
    setTimeout(() => {
       hoverPlay.remove()
       onClick.remove()
    }, 400);
    setTimeout(() => {
        container.setAttribute("id", "containerAppear")
     }, 200);
}