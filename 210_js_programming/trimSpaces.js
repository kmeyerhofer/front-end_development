function trimEnding(string) {
  var copyMode = false;
  var tempString = '';
  var newString = '';
  var i;
  for (i = (string.length - 1); -1 < i; i--) {
    if (string[i] !== ' ' || copyMode) {
      copyMode = true;
      tempString += string[i];
    }
  }
  for (i = (tempString.length - 1); -1 < i; i--) {
    newString += tempString[i]
  }
  return newString;
}

function trimBeginning(string) {
  var copyMode = false;
  var newString = '';
  var i;
  for (i = 0; i < string.length; i++) {
    if (string[i] !== ' ' || copyMode) {
      copyMode = true;
      newString += string[i];
    }
  }
  return newString;
}

function trim(string) {
  return trimEnding(trimBeginning(string));
}


trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
