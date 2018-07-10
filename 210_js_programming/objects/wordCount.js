function wordCount(string) {
  var results = {};
  var stringArray = string.split(' ');
  var i;
  for (i = 0; i < stringArray.length; i++) {
    if (results[stringArray[i]]) {
      results[stringArray[i]] += 1;
    } else {
      results[stringArray[i]] = 1;
    }
  }
  return results;
}
