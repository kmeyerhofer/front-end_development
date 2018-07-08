function pop(arr) {
  var length = arr.length;
  var lastValue = arr[length - 1];
  arr.length = length - 1;
  return lastValue;
}
