function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (searchString[i] !== string[i]) {
      return false;
    }
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

var longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false
