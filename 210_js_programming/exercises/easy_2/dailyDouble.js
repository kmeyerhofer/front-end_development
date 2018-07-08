function crunch(string) {
  var i;
  var newString = '';
  var prevChar;
  for (i = 0; i < string.length; i++) {
    if (string[i] !== prevChar) {
      newString += string[i];
    }
    prevChar = string[i]
  }
  return newString;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
