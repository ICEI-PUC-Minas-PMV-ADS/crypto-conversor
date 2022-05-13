const hamburguer = document.querySelector(".hamburguer");
const navBar = document.querySelector(".nav-bar");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navBar.classList.toggle("active");
})