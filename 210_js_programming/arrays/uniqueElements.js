function uniqueElements(arr) {
  var i;
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    } else {
      continue;
    }
  }
  return newArr;
}
