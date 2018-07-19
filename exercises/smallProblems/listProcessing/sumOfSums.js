function sumOfSums(array) {
  var tempArr = [];
  var i;
  for (i = 1; i <= array.length; i += 1) {
    tempArr.push(array.slice(0, i).reduce(function (sum, num) {
      return sum + num;
    }));
  }
  return tempArr.reduce(function (sum, num) {
    return sum + num;
  });
}
