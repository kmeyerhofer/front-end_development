function toLowerCase(string) {
  var newString = '';
  var characterCode;
  var i;
  for (i = 0; i < string.length; i++) {
    characterCode = string.charCodeAt(i);
    if (characterCode >= 65 && characterCode <= 90) {
      newString += String.fromCharCode(characterCode + 32);
    } else {
      newString += string[i];
    }
  }
  return newString;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
