function searchArray(value, array) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
      break;
    }
  }
  return -1;
}
