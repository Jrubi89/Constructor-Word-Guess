//Require letter.js//
var letter = require("./Letter.js");
//Constructor//
//creating the answer with an object array//
function word(answer){
    this.objArray = [];
//creating for loop that will create a leter variable from the letter constructor and push the letter to the object array//
for(var i = 0; i < answer.length; i++){
    var letter = new Letter(answer[i]);
    this.objArray.push(letter);
    }
}

