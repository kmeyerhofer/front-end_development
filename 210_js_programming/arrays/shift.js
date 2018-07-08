function shift(arr) {
  var i;
  var firstElement = arr[0];
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return firstElement;
}
