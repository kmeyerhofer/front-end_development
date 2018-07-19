function substringsAtStart(string) {
  var substringArr = [];
  var i;
  for (i = 1; i <= string.length; i += 1) {
    substringArr.push(string.slice(0, i));
  }
  return substringArr;
}

function substrings(string) {
  var substringArr = [];
  var i;
  for (i = 0; i <= string.length; i += 1) {
    substringArr = substringArr.concat(substringsAtStart(string.slice(i, string.length)));
  }
  return substringArr;
}
