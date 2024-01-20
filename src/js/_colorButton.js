import { gameSession } from "./_playButton.js";

const colorButtons = document.querySelectorAll(".color");
let colorEventListeners = [];

const clickColor = (e) => {
    if(!gameSession) return;

    const color = e.target;
    const colorType = color.getAttribute("id").slice(6);

    gameSession.chooseColor(colorType);
}

colorButtons.forEach(colorBtn => {
    const colorEventListener = colorBtn.addEventListener("click", clickColor);
    colorEventListeners.push(colorEventListener);
    colorBtn.onkeydown = (key) => {
        if(key.code === 13) {
            clickColor();
        }
    }
});

export { colorEventListeners };