var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage);
image2.setAttribute("src", randomDiceImage2);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else if (randomNumber === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}