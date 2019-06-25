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
            console.log("\n")
            console.log(chalk.magenta("GUESS THIS WORD:"))
            guessWord.returnString()
            guessPrompt();
        }
    })

    function guessPrompt() {
        console.log("\n")
        inquirer.prompt([
            {
                type: 'input',
                name: 'userGuess',
                message: 'Choose a letter... [A-Z]'
            }
        ]).then(function(response) {
            console.log("\n")
            var userInput = response.userGuess.toLowerCase();
            if (!alphabet.includes(userInput) || guessedLetters.includes(userInput) ||userInput === "" || userInput === " ") {
                console.log('\nYou must enter a valid letter [A-Z]')
                console.log("You've guessed: " + guessedLetters + "\n")
                console.log(chalk.magenta("GUESS THIS WORD:"))
                guessWord.returnString();
                guessPrompt();
                
            } else if (userInput.length = 1){ // Pushes user input into array of valid inputs, reduces number of guesses left, and checks if guess was correct
                guessedLetters.push(userInput);
                console.log("\nYou've guessed: " + guessedLetters + "\n")
                guessesLeft--;
                guessWord.userGuess(userInput);
                console.log(chalk.magenta("GUESS THIS WORD:"))
                guessWord.returnString()
                guessPrompt();
            }
        })
    }