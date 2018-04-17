let inquirer = require('inquirer');
let chalk = require('chalk');
let log = console.log;
let Word = require('./word')
let wordBank = require('./wordbank').wordBank;

let playGame = function() {
    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    let wordToGuess = new Word(randomWord);
    wordToGuess.makeLetters();
    let dWord = wordToGuess.displayWord.join(" ");
    let wordLength = wordToGuess.displayWord.length;
    let guessedLetters = [];
    askQuestion(wordToGuess, dWord, wordLength, guessedLetters);
}
let replay = function() {
    let question = {
        type: 'confirm',
        name: 'replay',
        message: 'Would you like to play again?'
    }
    inquirer.prompt(question).then(answer => {
        if (answer.replay) {
            playGame();
        } else {
            end();
        }
    })
}
let checkIfWordsLeft = function() {
    if (wordBank.length === 0) {
        log(chalk.italic('You played all the words!'))
        end();
    } else {
        replay();
    }  
}
let end = function() {
    log(chalk.cyan('Bye Bye!!!'));
}
let askQuestion = function(wordToGuess, dWord, wordLength, guessedLetters) {
    let question = {
        type: 'input',
        name: 'guess',
        message: `Discover the name of the programming language: ${dWord}! Guess a letter:`,
    }
    inquirer.prompt(question).then(answer => {
        let ltr = answer.guess.toLowerCase();
        if (isNaN(ltr)  === false) {
            log(chalk.yellow('You must guess a letter'));
            askQuestion(wordToGuess, dWord, wordLength, guessedLetters);
        } else if (guessedLetters.indexOf(ltr) > -1) {
            log(chalk.yellow('You already guessed that letter'));
            askQuestion(wordToGuess, dWord, wordLength, guessedLetters);
        } else if (ltr.length !== 1){
            log(chalk.yellow('Please guess one character only'));
            askQuestion(wordToGuess, dWord, wordLength, guessedLetters);
        } else {
            guessedLetters.push(ltr);
            wordToGuess.checkChar(ltr);
            dWord = wordToGuess.displayWord.join(" ");
            if (wordToGuess.guessesLeft === 0) {
                log(chalk.red('You are out of guesses'));
                log(chalk.red(`The language was ${wordToGuess.word}`));
                log(chalk.red("GAME OVER!!!"));
                wordBank.splice(wordBank.indexOf(wordToGuess.word), 1);
                checkIfWordsLeft();
            }  else if (wordLength === wordToGuess.lettersGuessedCount) {
                log(chalk.blue(`You guessed the language! It was ${wordToGuess.word}!`));
                wordBank.splice(wordBank.indexOf(wordToGuess.word), 1);
                checkIfWordsLeft();
            } else {
                askQuestion(wordToGuess, dWord, wordLength, guessedLetters);
            }
        }
    })
}
playGame();

