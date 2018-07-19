function wordLengths(string) {
  if (!string) {
    return [];
  }
  return string.split(' ').map(function(word) {
    return word + ' ' + word.length;
  });
}
