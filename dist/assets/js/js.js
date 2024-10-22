function alertita (){
    alert ("!Bienvenido!")
}


const BotonAceptarCookies = document.getElementById("aceptar-cookies")
const avisoCookies = document.getElementById("aviso-cookies")


BotonAceptarCookies.addEventListener("click", () => {
    avisoCookies.classList.remove("activo");
});


