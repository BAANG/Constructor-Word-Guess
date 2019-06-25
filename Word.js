var Letter = require('./Letter.js')

var Word = function(currentWord) {
    this.letters = []; //Array containing each of the individual letter objects for current word.
    
    for (var i = -0; i < currentWord.length; i ++) { // Constructs letter object for each letter in current word and stores in array.
        var newLetter = new Letter(currentWord[i]);
        letters.push(newLetter);
    }

    
}