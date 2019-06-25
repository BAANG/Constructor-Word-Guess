// Global Variables/CDNs/Modules
    var inquirer = require('inquirer')
    var chalk = require('chalk')
    var Word = require('./Word.js')
    var randomWords = require('random-words')

    var guessedLetters = [];

    
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'gameStart',
            message: "Ready to play some no-holds-barred random word guessing game?!"
        }
    ]).then(function(response) {
        if (response.gameStart) {
            var generateWord = randomWords()
            var guessWord = new Word(generateWord)
            guessWord.returnString()
        }
    })
