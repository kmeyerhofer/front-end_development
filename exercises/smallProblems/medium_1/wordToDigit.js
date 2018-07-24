function wordToDigit(string) {
  var wordDigits = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0',
  }

  return string.split(' ').map(function(word) {
    if (wordDigits[word.match(/\w+/)] !== undefined) {
      return word.replace(/\w+/, wordDigits[word.match(/\w+/)]);
    } else {
      return word;
    }
  }).join(' ');
}



wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
