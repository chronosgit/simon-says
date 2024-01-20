import GameSession from "./_gameSession.js";

const colorButtons = document.querySelectorAll(".color");
const playButton = document.querySelector(".button_play");
const startPlaySection = document.querySelector(".play");
let gameSession = null;

const startPlay = (e) => {
    if(gameSession && gameSession.isGameOn) return;

    if(!gameSession) gameSession = new GameSession();

    gameSession.isGameOn = true;
    gameSession.addNewColor();

    startPlaySection.classList.add("hidden");
}

const playButtonListener = playButton.addEventListener("click", startPlay);
playButton.onkeydown = (key) => {
    if(key.code === 13) {
        startPlay();
    }
}

export { playButtonListener, gameSession };