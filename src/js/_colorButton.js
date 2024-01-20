import { gameSession } from "./_playButton.js";

const colorButtons = document.querySelectorAll(".color");
let colorEventListeners = [];

const clickColor = (color) => {
    if(!gameSession) return;
    
    const colorType = color.getAttribute("id").slice(6);

    gameSession.chooseColor(colorType);
}

colorButtons.forEach(colorBtn => {
    const colorEventListener = colorBtn.addEventListener("click", function() {
        clickColor(this) 
    });
    colorEventListeners.push(colorEventListener);
    colorBtn.onkeydown = (key) => {
        if(key.keyCode === 13) {
            clickColor(colorBtn);
        }
    }
});

export { colorEventListeners };