function GameSession() {
    this.level = 0;
    this.bestResult = 0;
    this.currentStep = 0;
    this.isGameOn = true;
    this.areAnimationsOn = false;
    this.colors = {};

    this.chooseColor = function(color) {
        if(!this.isGameOn) return;
        if(this.areAnimationsOn) return;

        const result = document.querySelector(".result");

        if(color === this.colors[this.currentStep + 1]) {
            this.currentStep++;

            if(this.currentStep === this.level) { // all picking is correct
                this.addNewColor();
                this.currentStep = 0;
                result.innerHTML = this.level;
            }

            // picking sound
        } else {
            this.endGame();
            result.innerHTML = "";

            // failure sound
        }
    }

    this.clearSession = function() {
        this.colors = {};
        this.level = 0;
        this.currentStep = 0;
        this.isGameOn = false;
        this.areAnimationsOn = false;
    }

    this.endGame = function() {
        this.bestResult = this.level - 1 >= this.bestResult ? this.level - 1 : this.bestResult;

        const feedBackSection = document.querySelector(".feedback");
        const feedBackMessageSpan = feedBackSection.firstElementChild.firstElementChild;

        feedBackSection.classList.remove("hidden");
        feedBackMessageSpan.innerHTML = this.bestResult;

        this.clearSession();

        const playSection = document.querySelector(".play");
        playSection.classList.remove("hidden");
    }

    this.addNewColor = function() {
        this.areAnimationsOn = true;
        const colorButtons = document.querySelectorAll(".color");
        colorButtons.forEach(clrBtn => clrBtn.style.cursor = "not-allowed");

        const randomInt = Math.floor(Math.random() * 5);
        let newColor = "";

        switch (randomInt) {
            case 1:
                newColor = "cyan";
                break;
            case 2:
                newColor = "red";
                break;
            case 3:
                newColor = "magenta";
                break;
            case 4:
                newColor = "blue";
                break;
            default:
                newColor = "red";
                break;
        }

        this.activatePreviosColors()
        .then(() => this.activateColor(newColor))
        .then(() => {
            this.colors[++this.level] = newColor
            this.areAnimationsOn = false;
            colorButtons.forEach(clrBtn => clrBtn.style.cursor = "pointer")
        });

        // picking sound
    }

    this.activateColor = function(color) {
        const colorButton = document.getElementById(`color-${color}`);
        let animalSoundUrl = "";
        
        switch(color) {
            case "cyan":
                animalSoundUrl = "../../public/assets/sounds/meow.mp3";
                break;
            case "red":
                animalSoundUrl = "../../public/assets/sounds/frog.mp3";
                break;
            case "magenta":
                animalSoundUrl = "../../public/assets/sounds/duck.mp3";
                break;
            case "blue":
                animalSoundUrl = "../../public/assets/sounds/dog.mp3";
                break;
        }

        const activationPromise = new Promise((res, rej) => {
            setTimeout(() => {
                colorButton.classList.add("color-choose-outline");
                const animalSound = new Audio(animalSoundUrl);
                animalSound.play();
                res(true);
            }, 1000);
        })
        .then(val => {
            setTimeout(() => colorButton.classList.remove("color-choose-outline"), 500);
        });

        return activationPromise;
    }

    this.activatePreviosColors = function() {
        const activationPromise = new Promise(async (res, rej) => {
            for(let level in this.colors) {
                await this.activateColor(this.colors[level]);
            }

            res();
        });

        return activationPromise;
    }
}

export default GameSession;