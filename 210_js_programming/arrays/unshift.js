function unshift(arr, value) {
  var newArr = [];
  var i;
  newArr[0] = value;
  for (i = 0; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  return newArr.length;
}
