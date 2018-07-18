function octalToDecimal(string) {
  var stringArr = string.split('');
  var numArr = stringArr.map(function (num, index) {
    return Number(num) * (8 ** (stringArr.length - index - 1));
  });
  return numArr.reduce(function(sum, num) { return sum + num });
}
