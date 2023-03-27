
/*1. Anvende javascript til at skifte farven i de sociale elementer til en mere passende farve (jeres vurdering) */
const socialIcons = document.querySelectorAll(".fa");
console.log(socialIcons)

for(let i = 0; i < socialIcons.length; i++){
    socialIcons[i].style.color = "blue";
};

/*4. Brug javascript til at indsætte et favicon - f.eks. det her http://hearthstoneapi.com/favicon.ico (I know...hvorfor ville man nogensinde gøre det irl...men for øvelsens skyld) */

const headEl = document.querySelector("head");

console.log(headEl);

const newLink = document.createElement("link");

newLink.setAttribute("rel", "icon");
newLink.setAttribute("type", "image/x-icon");
newLink.setAttribute("href", "http://hearthstoneapi.com/favicon.ico");

headEl.append(newLink);