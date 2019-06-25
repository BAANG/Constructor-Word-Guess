// Global Variables/CDNs/Modules
    var inquirer = require('inquirer')
    var chalk = require('chalk')
    var Word = require('./Word.js')
    var randomWords = require('random-words')

    var guessWord;
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var guessedLetters = [];
    var guessesLeft = 12;

    
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'gameStart',
            message: "Ready to play some no-holds-barred random word guessing game?!"
        }
    ]).then(function(response) {
        if (response.gameStart) {
            guessesLeft = 12
            var generateWord = randomWords()
            guessWord = new Word(generateWord)
            guessWord.returnString()
            guessPrompt();
        }
    })

    function guessPrompt() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'userGuess',
                message: 'Choose a letter... [A-Z]'
            }
        ]).then(function(response) {
            if ( // Conditional statements to validate the user response
            (!alphabet.includes(response.userGuess)) && 
            (response.userGuess.length = 1) && 
            (!guessedLetters.includes(response.userGuess))
            ) { // Pushes user input into array of valid inputs, reduces number of guesses left, and checks if guess was correct
                guessedLetters.push(response.userGuess);
                guessesLeft--;
                guessWord.userGuess(response.userGuess);
                guessWord.returnString()
                guessPrompt();

            } else {
                console.log('You must enter a valid letter [A-Z]')
                guessPrompt();
            }
        })
    }