function asciiValue(string) {
  var i;
  var sum = 0;
  for (i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }
  return sum;
}
