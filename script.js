
window.addEventListener("load", () => {
    const logo = document.querySelector("header .logo img");
    logo.style.transform = "scale(1.3)";
    setTimeout(() => {
        logo.style.transform = "scale(1)";
    }, 800);
});


const searchBox = document.querySelector("main input");
searchBox.addEventListener("focus", () => {
    searchBox.style.boxShadow = "0 0 15px #66ccff";
});
searchBox.addEventListener("blur", () => {
    searchBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
});


const tagline = document.querySelector("main p");
let text = tagline.textContent;
tagline.textContent = "";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();

document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", (e) => {

    });
});
