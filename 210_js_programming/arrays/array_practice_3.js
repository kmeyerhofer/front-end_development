function reverseArray(arr) {
  var i;
  var j = 0;
  var reversedArray = [];
  for (i = arr.length - 1; i >= 0; i--) {
    reversedArray[j] = arr[i];
    j++;
  }
  return reversedArray;
}
