function indexOf(arr, value) {
  var position = -1;
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      position = i;
      break;
    }
  }
  return position;
}
