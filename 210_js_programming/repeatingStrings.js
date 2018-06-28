function repeat(string, times) {
  if (typeof(times) !== 'number' || times < 0) {
    return undefined;
  }
  var i;
  var repeatedString = '';
  for (i = 0; i < times; i++) {
    repeatedString += string;
  }
  return repeatedString;
}


repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
