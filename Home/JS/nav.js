const primaryNav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener('click', () => {
    primaryNav.style.transform = "translateX(10%)";
});