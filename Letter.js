// Letter Constructor

var Letter = function(value) {
    this.value = value;
    this.isGuessed = false;

    this.checkLetter = function (char) { // Checks if letter in string is a space, or if the letter has beeng guessed already. (Returns the correct value to be printed)
        if (this.value === " ") {
            this.guessed = true;
            return " ";
        } else if (!this.isGuessed) { // If value/letter is not yet guessed, return underscore to signify an unsolved letter.
            return "_";
        } else {
            return this.value;
        }
    }

    this.checkGuess = function(userGuess) {
        if (userGuess === this.value) {
            this.isGuessed = true;
        }
    }
};

module.exports = Letter;
