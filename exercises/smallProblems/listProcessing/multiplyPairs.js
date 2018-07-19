function multiplyAllPairs(arrOne, arrTwo) {
  var i;
  var j;
  var newArr = [];
  for (i = 0; i < arrOne.length; i += 1) {
    for (j = 0; j < arrTwo.length; j += 1) {
      newArr.push(arrOne[i] * arrTwo[j]);
    }
  }
  return newArr.sort(function(one, two) {
    if (one > two) {
      return 1;
    } else if (one < two) {
      return -1;
    } else {
      return 0;
    }
  });
}
