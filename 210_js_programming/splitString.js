function splitString(string, delimiter) {
  if (delimiter === undefined) {
    return console.log('ERROR: No delimiter')
  }

  var tempString = '';
  var i;
  for (i = 0; i < string.length; i++) {
    if (delimiter === '') {
      tempString += string[i];
      console.log(tempString);
      tempString = '';
    } else if (string[i] !== delimiter) {
      tempString += string[i];
    } else {
      console.log(tempString);
      tempString = '';
    }
  }
  console.log(tempString);
}


splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
