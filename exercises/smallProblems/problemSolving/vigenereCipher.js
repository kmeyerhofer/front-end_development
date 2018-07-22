// input:
// plaintext: string, including punctuation
// keyword: string, no punctuation, case-insensitive
//
// output:
// each strings characters are shifted by the shift values of the keywords letters
//
// algorithm:
// split the plain text string (''), iterate over the array (with for map)
// one var keywordIndex, length of keyword = keyword.length. for each plaintext letter, increment
//   this var, but the index it references is equal to keywordIndex % keyword.length
//   keywordIndex += 1
//
// If the array character /[^a-z]/i.test(char) (NOT A-Z), subtract one from
//   keywordIndex & return char
//
// make function call which returns the new letter from a given letter and keyword letter
//   newLetter(originalLetter, keywordLetter)
//   shiftedBy = keywordLetter.toUpperCase().charCodeAt(0) - 90 + 25;
//   newLetterValue = originalLetter.charCodeAt(0) + shiftedBy;
//   newLetterValue > 122 || newLetterValue > 90
//     return String.fromCharCode(newLetterValue - 25)
//
//     else
//     return String.fromCharCode(newLetterValue)
//

function vigenereCipher(plaintext, keyword) {
  var keywordIndex = -1;
  return plaintext.split('').map(function(char) {
    if (/[^a-z]/i.test(char)) {
      return char;
    } else {
      keywordIndex += 1;
      return newLetter(char, keyword[keywordIndex % keyword.length])
    }
  }).join('');
}

function newLetter(origionalLetter, keywordLetter) {
  shiftedBy = keywordLetter.toUpperCase().charCodeAt(0) - 90 + 25;
  // newLetterValue = origionalLetter.charCodeAt(0) + shiftedBy;
  // if (newLetterValue <= 122 && newLetterValue >= 97 || newLetterValue <= 90 && newLetterValue >= 65) {
  //   return String.fromCharCode(newLetterValue);
  // } else {
  //   return String.fromCharCode(newLetterValue - 26);
  // }
  return caesarEncrypt(origionalLetter, shiftedBy);
}

function caesarEncrypt(string, rotateNumber) {
  rotateNumber = rotateNumber % 26;
  var upperCaseLimit = 90 - rotateNumber;
  var lowerCaseLimit = 122 - rotateNumber;
  return string.split('').map(function(char) {
    var charCode = char.charCodeAt(0);
    if (/[^a-z]/i.test(char)) {
      return char;
    } else if (/[A-Z]/.test(char)) {
      return charCode <= upperCaseLimit ? String.fromCharCode(charCode + rotateNumber) : String.fromCharCode(charCode + rotateNumber - 26);
    } else if (/[a-z]/.test(char)) {
      return charCode <= lowerCaseLimit ? String.fromCharCode(charCode + rotateNumber) : String.fromCharCode(charCode + rotateNumber - 26);
    }
  }).join('');
}



vigenereCipher("I'm testing this strings!", 'smell');
          //    s m ellsmel lsme llsmell
            // "A'y xpdlurr ezuw dejurrd!"

vigenereCipher("Pineapples don't go on pizzas!", 'meat');
            //  Bmnxmtpeqw dhz'x gh ar pbldal!

vigenereCipher("Pineapples don't go on pizzas!", 'A');
             // Pineapples don't go on pizzas!
vigenereCipher("Pineapples don't go on pizzas!", 'Aa');
             // pineapples don't go on pizzas!
vigenereCipher("Pineapples don't go on pizzas!", 'cab');
             // Riogaqrlfu dpp't hq oo riabat!
vigenereCipher("Dog", 'Rabbit');
             // Uoh
