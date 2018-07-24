function swap(string) {
  var splitString = string.split(' ');
  return splitString.map(function(word) {
    if (word.length === 1) {
      return word;
    }
    var tempWord = word;
    var firstLetter = word.slice(0, 1);
    var lastLetter = word.slice(-1);

    return lastLetter + word.slice(1, word.length - 1) + firstLetter;
  }).join(' ');
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
