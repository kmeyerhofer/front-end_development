function staggeredCase(string) {
  return string.split('').map(function (char, index) {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else if (index % 2 === 1) {
      return char.toLowerCase();
    }
  }).join('');
}
