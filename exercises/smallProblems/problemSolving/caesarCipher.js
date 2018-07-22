// Input:
// 1. String of all characters
// 2. Number to rotate all a-z characters by. (positive, INCLUDES 0)
//     Can be greater than the alphabet, wrapping around
//
// Output:
// new string, a-z characters (case remains the same) incremented by rotation number
// 
//
// Algorithm
// - normalize the Rotate number to a number between 0 & 25 (Number % 26 )
// - split string on each character (.split(''))
// - iterate with map() to return a new array. return the joined array into a new string
// - for each character, if it is: /[^a-z]/i.test(char) (not a-z, case insensitve)
//   return that character unchanged
//   create a limit character, if the current character is more than that
//     subtract 26 from the fromCharCode
//
//     'b'.charCodeAt(0);
//     String.fromCharCode(98 + num);

//

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






// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"


caesarEncrypt("I'm testing to see how 41 characters work", 6)
// "O's zkyzotm zu ykk nuc 41 ingxgizkxy cuxq"
