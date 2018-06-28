function substr(string, start, length) {
  var index;
  var newString = '';
  var i;
  if (start < 0) {
    index = string.length + start;
  } else {
    index = start;
  }
  for (i = 0; i < length; i++) {
    if (string[index + i] === undefined) {
      break;
    }

    newString += string[index + i];    
  }
  return newString;
}

var string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
