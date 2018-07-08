function alphaChar(char) {
  return char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z';
}

function cleanUp(string) {
  var i;
  var char = '';
  var newString = '';
  for (i = 0; i <= string.length; i++) {
    char = string[i];
    if (alphaChar(char)) {
      newString += char;
    } else if (newString[newString.length - 1] !== ' ') {
      newString += ' ';
    }
  }
  return newString;
}

// cleanUp("---what's my +*& line?");    // " what s my line "

// function rotThirteen(string) {
//   var newString = '';
//   var charCode;
//   var i;
//
//   for (i = 0; i < string.length; i++) {
//     charCode = string.charCodeAt(i);
//     if ((charCode >= 78 && charCode <= 90) || (charCode >= 110 && charCode <= 122)) {
//       newString += String.fromCharCode(charCode - 13);
//     } else if ((charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109)) {
//       newString += String.fromCharCode(charCode + 13);
//     } else {
//       newString += string[i];
//     }
//   }
//   return newString;
// }
