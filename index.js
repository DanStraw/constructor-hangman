let inquirer = require('inquirer');
let chalk = require('chalk');
let log = console.log;
let Word = require('./word')
let wordBank = require('./wordbank').wordBank;
let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let guessedLetters = [];
let wordToGuess = new Word(randomWord);
wordToGuess.makeLetters();
let dWord = wordToGuess.displayWord.join(" ")
let wordLength = wordToGuess.displayWord.length;

let askQuestion = function() {
    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    let guessedLetters = [];
    let question = {
        type: 'input',
        name: 'guess',
        message: `Discover the name of the programming language: ${dWord}! Guess a letter:`,
    }
    inquirer.prompt(question).then(answer => {
        let ltr = answer.guess;
        if (isNaN(ltr)  === false) {
            log(chalk.yellow('You must guess a letter'));
            askQuestion();
        } else if (guessedLetters.indexOf(ltr) > -1) {
            log(chalk.yellow('You already guessed that letter'));
            askQuestion();
        } else if (ltr.length !== 1){
            log(chalk.yellow('Please guess one character only'));
            askQuestion();
        } else {
            guessedLetters.push(ltr);
            wordToGuess.checkChar(ltr);
            dWord = wordToGuess.displayWord.join(" ");
            if (wordToGuess.guessesLeft === 0) {
                log(chalk.red('You are out of guesses'));
                log(chalk.red("GAME OVER!!!"));
            }  else if (wordLength === wordToGuess.lettersGuessedCount) {
                log(chalk.blue('You guessed the language!'));
            } else {
                askQuestion();
            }
        }
    })
}

let asktoReplay = function() {
    let question = 
}

askQuestion();

