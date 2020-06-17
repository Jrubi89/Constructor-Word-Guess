//Require letter.js//
var letter = require("./Letter.js");
//Constructor//
//creating the answer with an object array//
function word(answer) {
    this.objArray = [];
//creating for loop that will create a leter variable from the letter constructor and push the letter to the object array//
for(var i = 0; i < answer.length; i++){
    var letter = new Letter(answer[i]);
    this.objArray.push(letter);
    }
//creating log function to display data in the terminal//
this.log = function () {
    answerLog = "";
    for (var i = 0; i < this.objArray.length; i++) {
        answerLog += this.objArray[i] + " ";
    }
    console.log(answerLog + "\n============================\n");
};

this.userGuess = function (input) {
    for (var i = 0; i < this.objArray.length; i++) {
        this.objArray[i].guess(input);
    }
  }; 
}

module.exports = Word; 