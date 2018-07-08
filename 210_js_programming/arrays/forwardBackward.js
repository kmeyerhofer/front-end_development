function forwardBackwards(arr) {
  var i;
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
