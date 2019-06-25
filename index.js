// Global Variables/CDNs/Modules
    var inquirer = require('inquirer')
    var chalk = require('chalk')
    var Word = require('./Word.js')
    var randomWords = require('random-words')

    var guessWord;
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var guessedLetters = [];
    var guessesLeft = 15;
    var correctGuess = [];
    var correctLetters = [];
    
    
    function playGame() {
        guessedLetters = [];
        correctLetters = [];
        correctGuess = [];

        function storeSolution () {
            generateWord = randomWords();
            unsortedArray = [];
            for (var i = 0; i < generateWord.length; i ++) {
                if (!correctLetters.includes(generateWord[i])) {
                    unsortedArray.push(generateWord[i])
                    // console.log(unsortedArray)
                    correctLetters = unsortedArray.sort();
                }
            }
            // console.log("\n" + correctGuess + " is the correct guess array")
            // console.log(correctLetters + " is the correct letters array\n")
        }
        storeSolution();

        inquirer.prompt([
            {
                type: 'confirm',
                name: 'gameStart',
                message: "Ready to play some no-holds-barred random word guessing game?!"
            }
        ]).then(function(response) {
            if (response.gameStart) {
                guessesLeft = 15
                guessWord = new Word(generateWord)
                console.log("\n")
                console.log(chalk.magenta("GUESS THIS WORD:"))
                guessWord.returnString()
                checkWin();
            }
        })
    }

    function guessPrompt() {
        console.log("\nYou have " + chalk.inverse(guessesLeft) + " left...")
        inquirer.prompt([
            {
                type: 'input',
                name: 'userGuess',
                message: 'Choose a letter... [A-Z]'
            }
        ]).then(function(response) {
            console.log("\n")
            var userInput = response.userGuess.toLowerCase();

            if (!alphabet.includes(userInput) || guessedLetters.includes(userInput) ||userInput === "" || userInput === " " || userInput.length > 1) { // Conditions for incorrect guess
                console.log(chalk.red('\nYou must enter a valid letter [A-Z]'))
                // console.log("You've guessed: [" + guessedLetters + "]\n")
                // console.log(chalk.magenta("GUESS THIS WORD:"))
                // guessWord.returnString();
                checkWin();
                
            } else if (userInput.length = 1){ // Pushes user input into array of valid inputs, reduces number of guesses left, and checks if guess was correct
               if (generateWord.includes(userInput)) {
                   correctGuess.push(userInput);
               }
                guessedLetters.push(userInput);
                console.log("\nYou've guessed: [" + guessedLetters + "]\n")
                guessesLeft--;
                guessWord.userGuess(userInput);
                console.log(chalk.magenta("GUESS THIS WORD:"))
                guessWord.returnString()
                checkWin();
            }
        })
    }

    function checkWin() {
        correctGuess = correctGuess.sort()
        // console.log("\n" + correctGuess + " is the correct guess array")
        // console.log(correctLetters + " is the correct letters array\n")

            if (correctGuess.length === correctLetters.length && guessesLeft > 0) {
            console.log('\n############')
            console.log('############')
            console.log('##YOU WIN!##')
            console.log('############')
            console.log('############\n\n')

            playGame();
        } else if (guessesLeft > 0) {
            guessPrompt();
        } else if (guessesLeft = 0) {

            console.log('\n#############')
            console.log('#############')
            console.log('#YOU LOSE...#')
            console.log('#############')
            console.log('#############\n\n')

            playGame();
        }
    }

    playGame();