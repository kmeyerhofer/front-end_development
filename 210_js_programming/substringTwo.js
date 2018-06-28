function stringSlicing(string, start, end) {
  var newString = ''
  var i;
  for (i = 0; i < end - start; i++) {
    newString += string[start + i];
  }

  return newString;
}

function substring(string, start, end) {
  var strLen = string.length;

  if (start === end) {
    return '';
  } else if (end === undefined) {
    start = (typeof(start) !== 'number' ? 0 : start);

    return stringSlicing(string, start, strLen);
  } else if (start >= strLen || end >= strLen) {
    start = (start >= strLen ? strLen : start);
    end = (end >= strLen ? strLen : end);
    return stringSlicing(string, start, end);
  } else if (start < 0 || end < 0) {
    return stringSlicing(string, 0, 0);
  } else if (start > end) {
    return stringSlicing(string, end, start);
  } else {
    return stringSlicing(string, start, end);
  }
}

var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
