function combinedArray(even, odd) {
  var i;
  var combinedArr = [];
  for (i = 0; i < even.length; i++) {
      combinedArr.push(even[i]);
      combinedArr.push(odd[i]);
  }
  return combinedArr;
}
