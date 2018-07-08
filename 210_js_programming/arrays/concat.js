function push(arr, other) {
  arr[arr.length] = other;
  return arr.length;
}

function concat(arrOne, arrTwo) {
  var combinedArray = [];
  var i;
  for (i = 0; i < arrOne.length; i++) {
    push(combinedArray, arrOne[i]);
  }
  for (i = 0; i < arrTwo.length; i++) {
    push(combinedArray, arrTwo[i]);
  }
  return combinedArray;
}
