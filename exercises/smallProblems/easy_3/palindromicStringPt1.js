function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}
