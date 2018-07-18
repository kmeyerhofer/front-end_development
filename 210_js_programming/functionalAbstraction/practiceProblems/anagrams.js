function sortWord(word) {
  return word.split('').sort().join('');
}

function anagram(word, list) {
  var sortedWord = sortWord(word);
  var matchedWords = [];
  list.forEach(function (listWord) {
    if (sortedWord === sortWord(listWord)) {
      matchedWords.push(listWord);
    }
  });
  return matchedWords;
}
