function lastIndexOf(arr, value) {
  var position = -1;
  var i;
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      position = i;
      break;
    }
  }
  return position;
}
