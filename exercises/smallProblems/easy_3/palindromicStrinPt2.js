function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function isRealPalindrome(string) {
  var onlyChars = string.match(/[a-z]/ig).map(function(letter) {
    return letter.toLowerCase();
  }).join('');
  return isPalindrome(onlyChars);
}


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
