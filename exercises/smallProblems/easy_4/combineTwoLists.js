function interleave(array1, array2) {
  var combinedArr = [];
  var i;
  for (i = 0; i < array1.length; i += 1) {
    combinedArr.push(array1[i], array2[i]);
  }
  return combinedArr;
}

interleave([1,2,3], ['a', 'b', 'c']);
