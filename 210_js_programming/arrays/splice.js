function push(arr, other) {
  arr[arr.length] = other;
  return arr.length;
}

function splice(arr, start, num) {
  var removedValues = [];
  var i;
  for (i = start; i < arr.length; i++) {
    if (i < start + num) {
      push(removedValues, arr[i]);
    }
    array[i] = array[i + num];
  }
  arr.length = array.length - num;
  return removedValues;
}
