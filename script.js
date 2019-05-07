var css = document.querySelector("h3");
const [color1,color2] = document.querySelectorAll("input");
var body = document.getElementById("gradient");

setGradient = ()=> {
    body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
	css.textContent = `${body.style.background};`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);