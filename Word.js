var Letter = require('./Letter.js')

var Word = function(currentWord) {
    this.letters = []; //Array containing each of the individual letter objects for current word.
    
    for (var i = 0; i < currentWord.length; i ++) { // Constructs letter object for each letter in current word and stores in array.
        var newLetter = new Letter(currentWord[i]);
        this.letters.push(newLetter);
    }
    
    this.returnString = function() { // Checks each letter object and concatenates either a space, an underscore or the letter depending on the conditions set/returned by checkLetter function
        this.printString = "";
        for (var i = 0; i < letters.length; i ++) {
           this.printString += (printletters[i].checkLetter()) + " "
        }
        console.log(this.printString)
    }

    this.userGuess = function(userInput) { // Compares user input to each of the stored letter objects in array
        for (var i = 0; i < letters.length; i ++) {
            this.letters[i].checkGuess(userInput) 
        }
    }
}

module.exports = Word;