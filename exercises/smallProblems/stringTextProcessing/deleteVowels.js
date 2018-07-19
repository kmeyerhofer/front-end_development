function removeVowels(array) {
  return array.map(function (item) {
    return item.replace(/[aeiou]/gi, '');
  });
}
