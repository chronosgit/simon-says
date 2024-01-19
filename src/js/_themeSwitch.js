const themeSwitchButton = document.querySelector(".button_theme-switch");

const switchTheme = (e) => {
    const themeSwitchIcon = document.querySelector(".theme-icon");
    const themeSwitchIconStyles = getComputedStyle(themeSwitchIcon);

    const root = document.querySelector(":root");
    const rootStyles = getComputedStyle(root);

    const clrBg = rootStyles.getPropertyValue("--clr-bg");
    const clrWhite = rootStyles.getPropertyValue("--clr-white");
    const clrBlack = rootStyles.getPropertyValue("--clr-black");
    const darkSkyUrl = rootStyles.getPropertyValue("--url-dark-sky");
    const moonUrl = rootStyles.getPropertyValue("--url-moon");
    const lightSkyUrl = rootStyles.getPropertyValue("--url-light-sky");
    const sunUrl = rootStyles.getPropertyValue("--url-sun");
    const noShift = themeSwitchIconStyles.getPropertyValue("--shift-no");
    const rightShift = themeSwitchIconStyles.getPropertyValue("--shift-right");
    const currentIconShift = themeSwitchIconStyles.getPropertyValue("--shift-size");

    const newShift = currentIconShift === rightShift ? noShift : rightShift;

    if(clrBg === clrWhite) { // onLight
        root.style.setProperty("--clr-bg", clrBlack);
        root.style.setProperty("--clr-main", clrWhite);
        root.style.setProperty("--url-theme-switch-bg", darkSkyUrl);
        root.style.setProperty("--url-theme-switch-icon", moonUrl);
        themeSwitchIcon.style.setProperty("--shift-size", newShift);
    } else { // onDark
        root.style.setProperty("--clr-bg", clrWhite);
        root.style.setProperty("--clr-main", clrBlack);
        root.style.setProperty("--url-theme-switch-bg", lightSkyUrl);
        root.style.setProperty("--url-theme-switch-icon", sunUrl);
        themeSwitchIcon.style.setProperty("--shift-size", newShift);
    }
}

const themeSwitchListener = themeSwitchButton.addEventListener("click", switchTheme);

export { themeSwitchListener };