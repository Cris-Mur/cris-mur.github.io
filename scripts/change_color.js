function splitDarkMode() {

    const root = document.documentElement;
    let currentMode = getComputedStyle(root).getPropertyValue("--color-background");
    let lightMode = getComputedStyle(root).getPropertyValue("--color-light");
    let darkMode = getComputedStyle(root).getPropertyValue("--color-dark");


    if (currentMode === lightMode) {
        root.style.setProperty('--color-background', darkMode);
        root.style.setProperty('--color-text', lightMode);
        let logo = document.querySelector(".Logo>img");
        console.log(logo);
        logo.style.setProperty("content", "../resources/Logo/transparent/long_dark.png");
    } else {
        root.style.setProperty('--color-background', lightMode);
        root.style.setProperty('--color-text', darkMode);
        let logo = document.querySelector(".Logo>img");
        logo.style.setProperty("content", "../resources/Logo/transparent/long_light.png");
    }
}