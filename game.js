
//Array of rockets players to be guessed by the user 
var words = ["james\xa0harden", "chris\xa0paul", "trevor\xa0ariza", "clint\xa0capella", "eric\xa0gordon", "nene", "ryan\xa0anderson", "", "bobby\xa0brown", "pj\xa0tucker", "tarik\xa0black", "troy\xa0williams", "zhou\xa0qi", "chinaru\xa0onuaku"];

//Random word generator using previous array.  Exports allows this to be accessed using the others files
exports.chooseWord = function () {
    var randNum = Math.floor((Math.random() * words.length) + 1);
    return words[randNum];
}