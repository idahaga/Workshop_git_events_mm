/*3. Brug javascript til at skifte billedet ud i .bigPicture-boksen, brug dette eller noget helt andet: 
https://cdn.pixabay.com/photo/2017/09/28/13/18/amusement-2795490_960_720.jpg */

const bigPicture = document.querySelector(".bigPicture");

bigPicture.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/09/28/13/18/amusement-2795490_960_720.jpg')";

/*6. Som I måske har lagt mærke til, er der en .crazyPopup box som står udenfor body 
(se i css...prøv f.eks. at ændre property "right" til value -200 og 0). 
Opgaven er at den nu "popper up" når personer har scrollet 100px ned og forsvinde igen når de scroller op under 100px igen  
- lookie: https://drive.google.com/file/d/10aSqzcL3br8DU5AhggE54Pal0Z3s-x5y/view */

//fang .crazyPopup box:

const crazyPopup = document.querySelector(".crazyPopup");

// Tilføj eventlistener på scroll 100px og function: ændr property til value -400

window.addEventListener("scroll", (e) => {
    const scrollY = window.scrollY;
    if (scrollY > 100){
        crazyPopup.style.right = "0px"
    }
    else {
        crazyPopup.style.right = "-400px"
    }
})