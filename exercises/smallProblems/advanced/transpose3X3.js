var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  var i;
  var j;
  var results = [];
  var newArr;
  for (i = 0; i < matrix.length; i += 1) {
    newArr = [];
    for (j = 0; j < matrix.length; j += 1) {
      newArr.push(matrix[j][i]);
    }
    results.push(newArr);
  }
  return results;
}

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
