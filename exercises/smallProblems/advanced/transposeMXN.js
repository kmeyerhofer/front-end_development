function transpose(matrix) {
  var i;
  var j;
  var results = [];
  var newArr;
  for (i = 0; i < matrix[0].length; i += 1) {
    newArr = [];
    for (j = 0; j < matrix.length; j += 1) {
      newArr.push(matrix[j][i]);
    }
    results.push(newArr);
  }
  return results;
}



transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
