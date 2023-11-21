document.addEventListener("DOMContentLoaded", function () {
    // Toggle dark mode
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    // Other interactive elements or functionality can be added here
});

// Other JavaScript logic goes here

// make the header of website responsive 
const hmaburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hmaburger.addEventListener("click",()=>{
    hmaburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
    hmaburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}));


//thank you btn show the message 
const thankYou = document.querySelector(".thank-you");
const imoji = document.querySelector(".imoji");

imoji.addEventListener('click',()=>{
thankYou.classList.add("show")
setTimeout(()=>{
        thankYou.classList.remove("show")
            },3000)
})

function login() {
    // This is where you would typically send a request to your server for authentication.
    // For the sake of this example, let's just log the username to the console.
    const username = document.getElementById('username').value;
    console.log('Logged in as:', username);
};
