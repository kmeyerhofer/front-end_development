function showMultiplicativieAverage(array) {
  // var product = 1;
  var product = array.reduce(function(prod, value) {
    return prod *= value;
  }, 1);
  return (product / array.length).toFixed(3);
}


showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
