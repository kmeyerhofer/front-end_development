// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// Input:
// Word string
//
// output:
// boolean if the word can be spelled using the blocks.
//
// strategy:
//
// split string, iterate over each letter in the array.
// create empty used letter array.
// create return value var equal to false.
//   return 'var value' if letter & pair is already in used letter array
//   push letter in used letter array, along with blocks pair
//
//   at end of iteration, set 'var value' equal to true & return it


var LETTERS = [
  ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
  ['V', 'I'], ['L', 'Y'], ['Z', 'M']
];

function isBlockWord(word) {
  var usedLetterArray = [];
  var returnValue = false;
  var i;
  var j;
  for (i = 0; i < word.length; i += 1) {
    if (usedLetterArray.indexOf(word[i].toUpperCase()) !== -1) {
      return returnValue;
    }
    for (j = 0; j < LETTERS.length; j += 1) {
      var letterIndex = LETTERS[j].indexOf(word[i].toUpperCase());
      if (letterIndex !== -1) {
        LETTERS[j].forEach(function(item) {
          usedLetterArray.push(item);
        });
        break;
      }
    }
  }
  returnValue = true;
  return returnValue;
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBLockWord('test');       // false
isBlockWord('Split');      // true
isBlockWord('floW');       // true
isBlockWord('APPLE');      // false
isBlockWord('apple');      // false
isBlockWord('apPLE');      // false
isBlockWord('Box');        // false
