let wordArray = [];
let incorrectGuesses;
let Letter = function(letter) {
        //A string value to store the underlying character for the letter
        this.letter = letter;
        //A boolean value that stores whether that letter has been guessed yet
        this.guessed = false;
        this.returnCharacter = function() {
            if (!this.guessed) {
                this.letter = "_"
                return this.letter;
                console.log('_');
            } else {
                return this.letter;
            }
        }
        this.checkifCorrect = function() {
            if (wordArray.indexOf(this.letter) > -1) {
                this.guessed = true;
                console.log('trueballs')
            } else {
                incorrectGuesses++;
                console.log('false');
        }
    } 
}
// for (let i = 0; i < wordArray.length; i++) {
//     const element = array[i];
    
// }
    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    
    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
wordArray.forEach(element => {
    let ltr = new Letter(element);
    console.log(ltr.returnCharacter());
});
     
let a = new Letter('a');
a.checkifCorrect();

module.exports = Letter;
