let Ltr = require('./letter');
let chalk = require('chalk');
//Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
let Word = function(randomWord) {
    this.word = randomWord;
    this.wordArray = randomWord.split("");
    this.displayWord = [];
    this.lettersGuessedCount = 0;
    this.guessesLeft = 6;
    
    
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
    this.checkChar = function(guessedCharacter) {
        let w = this.wordArray;
        let goodGuess = false;
        
        for (let i = 0; i < w.length; i++) {
            const ltr = w[i];
            let letter = new Ltr(ltr);
            letter.checkifCorrect(ltr, guessedCharacter);
            if (letter.guessed) {
                this.lettersGuessedCount++;
                letter.returnCharacter();
                this.displayWord.splice(i, 1, letter.letter)
                goodGuess = true;
            }
        }
        if (!goodGuess) {
            this.guessesLeft--;
            console.log(chalk.red(`${guessedCharacter} is not in the word. You have ${this.guessesLeft} guesses left`));
        } else if (goodGuess) {
            console.log(chalk.green(`Good guess. ${guessedCharacter} is in the word.`))
        }
    }
}
module.exports = Word;



//An array of new Letter objects representing the letters of the underlying word
//A function that returns a string representing the word. This should call the function on each letter object 
    //(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)