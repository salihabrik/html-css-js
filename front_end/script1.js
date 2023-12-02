document.addEventListener("DOMContentLoaded", function () {
    // Toggle dark mode
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const navbar = document.getElementById('myNavbar');

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        navbar.classList.toggle('dark-mode');
    })
});