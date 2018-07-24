function union(array1, array2) {
  var newArr = [];
  var i;
  for (i = 0; i < array1.length; i += 1) {
    newArr.push(array1[i]);
  }
  for (i = 0; i < array2.length; i += 1) {
    if (newArr.indexOf(array2[i]) === -1) {
      newArr.push(array2[i]);
    }
  }
  return newArr;
}


union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
