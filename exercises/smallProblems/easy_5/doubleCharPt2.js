function doubleConsonants(string) {
  return string.split('').map(function(char) {
    if (/[bcdfghjklmnpqrstvwxyz]/ig.test(char))
    return char.repeat(2);
    else {
      return char;
    }
  }).join('');
}

doubleConsonants('Hello');        // "HHellllo"
doubleConsonants('Good job!');    // "GGoodd jjobb!"
doubleConsonants('');             // ""
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
