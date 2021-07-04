function chooseRandomDiceimage() {

  //creat an array of all the images

  var diceImages = ["images/dice1.png",
                    "images/dice2.png",
                    "images/dice3.png",
                    "images/dice4.png",
                    "images/dice5.png",
                    "images/dice6.png"];

  //create a varibale index that's able to select random numbers between 0-length of previous array

  var randomIndex = Math.floor(Math.random() * diceImages.length);

  // set the recent varibale as an index

  var chooseDice = diceImages[randomIndex];

  // set up the DOM so that it can display the different images of Dice

  document.querySelector("img1").setAttribute("src", "chooseDice");

}
