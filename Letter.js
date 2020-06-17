//Creating letter constructor//
function letter(value) {
    this.letter = value;
    this.guessed = false;
//Function to make a string that will determine guessed true or false, blanks and underline//
    this.toString = function() {
        if (this.letter === " "){
            this.guessed = true;
            return " ";
        }else {
            if (this.guessed === false){
                return "_";
            }else{
                return this.letter;
            }
        }
    };
//Function to create guess//
    this.guess = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
}
module.exports = letter;