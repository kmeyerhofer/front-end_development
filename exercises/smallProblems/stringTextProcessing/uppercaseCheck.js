function isUppercase(string) {
  return string.split('').every(function (letter) {
    return /[^a-z]/.test(letter);
  });

  // return !/[a-z]/.test(string);
}

isUppercase('t');
isUppercase('T');
isUppercase('Four Score');
isUppercase('FOUR SCORE');
isUppercase('4SCORE!');
isUppercase('');
