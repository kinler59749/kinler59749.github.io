$(document).ready(function () {
  // Your code goes here
});

function makeDot(top, left, elementID) {
  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("border-radius", "50%")
  .css("background-color", "white")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(elementID);
}




function rollDie(dieID){
 $(dieID).empty();
  var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);
if (dieID === "#die"){
if (randomNum === 1) {
  makeDot(50, 50, dieID); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, dieID); // top left
  makeDot(75, 75, dieID); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, dieID); // top left
  makeDot(75, 75, dieID); // bottom right
  makeDot(50, 50, dieID); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, dieID); // bottom right
  makeDot(25, 25, dieID); // top left
  makeDot(25, 75, dieID); // bottom left
  makeDot(75, 25, dieID); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, dieID); // middle middle
  makeDot(75, 75, dieID); // bottom right
  makeDot(25, 25, dieID); // top left
  makeDot(25, 75, dieID); // bottom left
  makeDot(75, 25, dieID); // top right
}
  else if (randomNum === 6) {
  makeDot(25, 25, dieID)
  makeDot(75, 50, dieID)
  makeDot(75, 25, dieID)
  makeDot(25, 75, dieID)
  makeDot(25, 50, dieID)
  makeDot(75, 75, dieID)
}
}
else if (dieID === "#die2"){
  if (randomNum === 1) {
  makeDot(45, 45, dieID); // middle middle
} else if (randomNum === 2) {
  makeDot(20, 20, dieID); // top left
  makeDot(70, 70, dieID); // bottom right
} else if (randomNum === 3) {
  makeDot(20, 20, dieID); // top left
  makeDot(70, 70, dieID); // bottom right
  makeDot(45, 45, dieID); // middle middle
} else if (randomNum === 4) {
  makeDot(70, 70, dieID); // bottom right
  makeDot(20, 20, dieID); // top left
  makeDot(20, 70, dieID); // bottom left
  makeDot(70, 20, dieID); // top right
} else if (randomNum === 5) {
  makeDot(45, 45, dieID); // middle middle
  makeDot(70, 70, dieID); // bottom right
  makeDot(20, 20, dieID); // top left
  makeDot(20, 70, dieID); // bottom left
  makeDot(70, 20, dieID); // top right
}
  else if (randomNum === 6) {
  makeDot(20, 20, dieID)
  makeDot(70, 45, dieID)
  makeDot(70, 20, dieID)
  makeDot(20, 70, dieID)
  makeDot(20, 45, dieID)
  makeDot(70, 70, dieID)
}
}
}

function handleClick() {
  rollDie("#die");
  rollDie("#die2");
}

$("#die").on("click", handleClick)
$("#die2").on("click", handleClick);


