function substringsAtStart(string) {
  var substringArr = [];
  var i;
  for (i = 1; i <= string.length; i += 1) {
    substringArr.push(string.slice(0, i));
  }
  return substringArr;
}
