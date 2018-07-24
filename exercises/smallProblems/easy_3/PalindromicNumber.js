function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
