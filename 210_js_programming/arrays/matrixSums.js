function matrixSums(arr) {
  var newArr = [];
  var sum = 0;
  var i;
  var j;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    newArr[i] = sum;
    sum = 0;
  }
  return newArr;
}
