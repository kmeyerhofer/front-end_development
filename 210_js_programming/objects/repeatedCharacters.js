function repeatedCharacters(string) {
  var lowerCaseString = string.toLowerCase();
  var stringArr = lowerCaseString.split('');
  var i;
  var letterCounts = {};
  var letter;
  for (i = 0; i < stringArr.length; i++) {
    if (letterCounts[stringArr[i]] === undefined) {
      letterCounts[stringArr[i]] = 1;
    } else {
      letterCounts[stringArr[i]] += 1;
    }
  }

  for (letter in letterCounts) {
    if (letterCounts[letter] < 2) {
      delete letterCounts[letter];
    }
  }
  return letterCounts;
}
