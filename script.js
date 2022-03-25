/************** NAVBAR THEME TOGGLE **************/ 

const lightToggle = document.getElementById("light-toggle");
const darkToggle = document.getElementById("dark-toggle");
const navThemeToggleBackground = document.getElementById("nav-theme-toggle-background");
const navMenuBtn = document.getElementById("nav-menu-btn");
const navCloseBtn = document.getElementById("nav-close-btn");
const navMenu = document.getElementById("nav-menu");
navMenuBtn.addEventListener("click", () => {
    navMenu.style.left = "0";
})
navCloseBtn.addEventListener("click", () => {
    navMenu.style.left = "-100%";
})
lightToggle.addEventListener("click", () => {
    if (!lightToggle.classList.contains("color-white")){
        darkToggle.classList.remove("color-white");
        lightToggle.classList.add("color-white");
    }
    navThemeToggleBackground.style.left = "0";
    document.body.classList.remove("dark-theme-variables");
})
darkToggle.addEventListener("click", () => {
    if (!darkToggle.classList.contains("color-white")){
        lightToggle.classList.remove("color-white");
        darkToggle.classList.add("color-white");
    }
    navThemeToggleBackground.style.left = "50%";
    document.body.classList.add("dark-theme-variables");
})