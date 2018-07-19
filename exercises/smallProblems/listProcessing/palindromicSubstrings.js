function substringsAtStart(string) {
  var substringArr = [];
  var i;
  for (i = 1; i <= string.length; i += 1) {
    substringArr.push(string.slice(0, i));
  }
  return substringArr;
}

function substrings(string) {
  var substringArr = [];
  var i;
  for (i = 0; i <= string.length; i += 1) {
    substringArr = substringArr.concat(substringsAtStart(string.slice(i, string.length)));
  }
  return substringArr;
}

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  // var allSubstrings = substrings(string);
  // var palindromes = [];
  // allSubstrings.forEach(function(element) {
  //   for (var i = 0; i <= Math.floor(element.length / 2); i += 1) {
  //     if (i === element.length - i - 1 && element.length !== 1) {
  //       palindromes.push(element);
  //     } else if (element[i] !== element[element.length - i - 1]) {
  //       break;
  //     }
  //   }
  // });
  // return palindromes;
  return substrings(string).filter(isPalindrome);
}
