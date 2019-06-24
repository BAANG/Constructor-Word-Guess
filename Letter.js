// Letter Constructor

var Letter = function(value) {
    this.value = value;
    this.isGuessed = false;

    this.correctGuess = function (char) {
        if (this.value === " ") {
            this.guessed = true;
            return " ";
        }
        if (this.isGuessed === char) {
            this.isGuessed = true;
            return this.value
        }
    }

    this.checkGuess = function (character) {
        if ()
    }
}