function push(arr, other) {
  arr[arr.length] = other;
  return arr.length;
}

function slice(arr, start, end) {
  var newArr = [];
  var i;
  for (i = 0; i < end - start; i++) {
    push(newArr, arr[start + i]);
  }
  return newArr;
}
