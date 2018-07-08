function concatArray(arr) {
  var i;
  var concatString = '';
  for (i = 0; i < arr.length; i++) {
    concatString += String(arr[i]);
  }
  return concatString;
}
