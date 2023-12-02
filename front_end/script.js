
// make the header of website responsive 
const sisi = document.querySelector(".sisi");
const navMenu = document.querySelector(".nav-menu");

sisi.addEventListener("click",()=>{
    sisi.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
    sisi.classList.remove("active");
    navMenu.classList.remove("active");
    
}));


