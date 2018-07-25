function reverseWords(string) {
  var separatedWords = string.split(' ');
  return separatedWords.map(function(word) {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
