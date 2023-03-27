/*1. Anvende javascript til at skifte farven i de sociale elementer til en mere passende farve (jeres vurdering) */
const socialIcons = document.querySelectorAll(".fa");
console.log(socialIcons)

for(let i = 0; i<= socialIcons.length; i++){
    socialIcons[i].style.color = "blue";
}

