let wordArray = [];
let Letter = function(letter) {
        //A string value to store the underlying character for the letter
        this.letter = letter;
        wordArray.push(this.letter);       
        //A boolean value that stores whether that letter has been guessed yet
        this.guessed = false;
        /*A function that returns the underlying character if the letter has been guessed, 
        or a placeholder (like an underscore) if the letter has not been guessed*/
        this.returnCharacter = function() {
            if (!this.guessed) {
                this.letter = "_"
                return this.letter;
            } else {
                return this.letter;
            }
        }
        /*A function that takes a character as an argument and checks it against the underlying character, 
        updating the stored boolean value to true if it was guessed correctly*/
        this.checkifCorrect = function(correctLtr, guessedLetter) {
            if (correctLtr === guessedLetter) {
                this.guessed = true;
        }
    } 
}    
module.exports = Letter;
