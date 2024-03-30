const darkLight = document.querySelector (".label");
const html = document.querySelector("html");
const logo = document.querySelector("#img")
const bgImg = document.getElementById("bg-img");

let logoChange = 0;

darkLight.addEventListener("click", () => {
    darkLight.classList.toggle("dark")
    html.classList.toggle("dark")

    if(logoChange === 0){
        logo.src = "./img/logo-dark.png";
        bgImg.src = "./img/bg-dark.png"
        logoChange = 1;
    } else {
        logo.src = "./img/logo-light.png";
        bgImg.src = "./img/bg-light.png"
        logoChange = 0;
    }
}) //Script só sobre o modo escuro/claro