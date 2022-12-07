// Variables create two random numbers between 1-6.
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

// The current images are replaced with the images selected by the random numbers.
document.querySelector(".img1").setAttribute("src", "images\\dice"+ randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src", "images\\dice"+ randomNumber2 +".png");


// The title is then changed depending on which variable is higher or even.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "Draw!";
}