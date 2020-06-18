//Creating require connection//
var word = require("./Word.js");
var inquirer = require("inquirer");
//Array for letters//
var letterArray = "abcdefghijklmnopqrstuvwxyz";
//Array that is gonna hold the words that are been guess//
var UnitedState = [
"Alabama", 
"Alaska",
"Arizona", 
"Arkansas", 
"California", 
"Colorado", 
"Connecticut", 
"Delaware", 
"Florida", 
"Georgia", 
"Hawaii", 
"Idaho", 
"Illinois", 
"Indiana", 
"Iowa", 
"Kansas", 
"Kentucky", 
"Louisiana", 
"Maine", 
"Maryland", 
"Massachusetts", 
"Michigan", 
"Minnesota", 
"Mississippi", 
"Missouri", 
"Montana", 
"Nebraska", 
"Nevada", 
"New Hampshire", 
"New Jersey", 
"New Mexico", 
"New York", 
"North Carolina", 
"North Dakota", 
"Ohio", 
"Oklahoma", 
"Oregon", 
"Pennsylvania", 
"Rhode Island", 
"South Carolina", 
"South Dakota", 
"Tennessee", 
"Texas", 
"Utah", 
"Vermont", 
"Virginia", 
"Washington", 
"West Virginia", 
"Wisconsin", 
"Wyoming" 

];
//Create random loop//
var randomIndex = Math.floor(Math.random() * UnitedStates.length);
//Create random word variable that is created from united states randomIndex//
var randomWord = UnitedState[randomIndex];
// Making computer word construct that creates a random word//
var computerWord = new Word(randomWord);

var requireNewWord = false;
var incorrectLetter = [];
var correctLetter = [];

var guessesLeft = 10;
//Creating logic fuction//
function theLogic() {
    if(requireNewWord) {
        var randomIndex = Math.floor(Math.random() * UnitedStates.length);
        var randomWord = UnitedState[randomIndex];

        computerWord = new Word(randomWord);

        requireNewWord = false;
}

var wordComplete = [];

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
              type: "input",
              message: "Guess a letter between A-Z!",
              name: "userinput"
            }
    ])
    .then(function(input){
        if (
            !letterArray.includes(input.userinput) || 
            input.userinput.length > 1
            ) {
            console.log("\nPlease try again!\n");
            theLogic();
        } else {
            if (
              incorrectLetters.includes(input.userinput) || 
              correctLetters.includes(input.userinput) || 
              input.userinput === ""
        ) {
            console.log("\nAlready Guessed or Nothing Entered\n");
            theLogic();
        
        }else {
            var wordCheckArray = [];

            computerWord.userGuess(input.userinput);

            computerWord.objArray.forEach(wordCheck);
            if (wordCheckArray.join("") === wordComplete.join("")) {
                console.log("\nIncorrect\n");
               
                incorrectLetters.push(input.userinput);
                guessesLeft--;
            } else {
                console.log("\nCorrect!\n");
               
                correctLetters.push(input.userinput);
            }
            computerWord.log();

            console.log("Guesses Left: " + guessesLeft + "\n");
    
            console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");
            
            if (guessesLeft > 0) {
                theLogic();
            }else {
                console.log("You have lost!\n");
            }
            function wordCheck(key) {
                wordCheckArray.push(key.guessed);
            }
          }  
        }
    });
  } else {
    console.log("YOU WIN!\n");
  }
    function completeCheck(key) {
      wordComplete.push(key.guessed);   
  }
}



