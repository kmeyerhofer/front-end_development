function repeater(string) {
  return string.split('').map(function(char) {
    return char.repeat(2);
  }).join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
