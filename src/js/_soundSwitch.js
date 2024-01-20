const soundSwitchButton = document.querySelector(".button_sound-switch");

const toggleSound = (e) => {
    const soundSwitchButtonStyles = getComputedStyle(soundSwitchButton);

    if(soundSwitchButtonStyles.getPropertyValue("--mode") === "block") { // unmuted
        soundSwitchButton.style.setProperty("--mode", "none");
    } else {
        soundSwitchButton.style.setProperty("--mode", "block");
    }
}

const soundSwitchListener = soundSwitchButton.addEventListener("click", toggleSound);

export { soundSwitchListener };