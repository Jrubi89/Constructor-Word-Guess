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