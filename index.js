let inquirer = require('inquirer');
let Word = require('./word')
let wordBank = require('./wordbank').wordBank;
let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let guessedLetters = [];
let wordToGuess = new Word(randomWord);
wordToGuess.makeLetters();

let question = {
    type: 'input',
    name: 'guess',
    message: `Discover the name of the programming language: ${wordToGuess.displayWord.join(" ")}! Guess a letter:`,
}

inquirer.prompt(question).then(answer => {
    console.log(`You guessed ${answer.guess}!!!`);
    let ltr = answer.guess;
    guessedLetters.push(ltr);
    // console.log(guessedLetters);
    // for (let i = 0; i < wordToGuess.wordArray.length; i++) {
    //     const element = array[i];
        
    // }
})
