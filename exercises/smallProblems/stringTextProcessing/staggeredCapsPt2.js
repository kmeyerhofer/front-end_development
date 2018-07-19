function staggeredCase(string) {
  return string.split('').map(function (char, index) {
    if (index % 2 === 0 && /[a-z]/i.test(char)) {
      return char.toUpperCase();
    } else if (index % 2 === 1 && /[a-z]/i.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}
