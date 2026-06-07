const darkModeBtn = document.querySelector(".dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀";
    } else {
        darkModeBtn.textContent = "🌙";
    }
    
});