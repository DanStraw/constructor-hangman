let Ltr = require('./letter');

//Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
let Word = function(randomWord) {
    this.word = randomWord;
    this.wordArray = randomWord.split("");
    this.displayWord = [];
    
    // console.log(this.wordArray);
    this.makeLetters = function() {
        let w = this.wordArray;
        for (let i = 0; i < w.length; i++) {
            const ltr = w[i];
            let letter = new Ltr(ltr);
            letter.returnCharacter();
            // console.log(letter.letter);
            this.displayWord.push(letter.letter);
        }
        // console.log(this.displayWord.join(" "));
    }
    // this.returnWordString = function() {
    //     this.wordString = this.word.join("");
    //     return this.wordString;
    // }
}
module.exports = Word;



//An array of new Letter objects representing the letters of the underlying word
//A function that returns a string representing the word. This should call the function on each letter object 
    //(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)