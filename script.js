const darkModeBtn = document.querySelector(".dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});