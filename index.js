//create an array of all the images

var diceImages = ["images/dice1.png",
                  "images/dice2.png",
                  "images/dice3.png",
                  "images/dice4.png",
                  "images/dice5.png",
                  "images/dice6.png"];


//create two varibales for the two images that's able to select random numbers between 0-length of previous array

var randomIndex = Math.floor(Math.random() * diceImages.length);
var randomIndex2 = Math.floor(Math.random() * diceImages.length);

// create variables and set up Dom so that it can display different set up images

var image1 = document.querySelectorAll("img")[0].setAttribute("src", diceImages[randomIndex]);
var image2 = document.querySelectorAll("img")[1].setAttribute("src", diceImages[randomIndex2]);

// set up game flow
function diceGame(){
  if (randomIndex === randomIndex2) {

    document.querySelector("h1").innerText = "It's a tie!";
  }

  else if (randomIndex > randomIndex2) {

    document.querySelector("h1").innerText = "🚩Player 1 wins!";

  }

  else if (randomIndex2 > randomIndex) {

    document.querySelector("h1").innerText = "🚩Player 2 wins!";
  }
}

diceGame();
