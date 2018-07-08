function missing(arr) {
  var start = arr[0];
  var end = arr[arr.length - 1];
  var i;
  var missingNums = [];
  for (i = start; i < end; i++) {
    if (arr.indexOf(i) === -1) {
      missingNums.push(i);
    }
  }
  return missingNums;
}
