// input:
// two sorted arrays
//
// output:
// one sorted array
//
// algorithm:
// create a new empty results array, (function does not mutate origional arrays)
// create temporary "lowest" value variable
//
// have two for loops, i & j as variables;
// do not auto increment variables, only increment separate vars when array value is less than other
// compare each returned value within array, and push the value if it's less than the other value



function merge(array1, array2) {
  var results = [];
  var i = 0;
  var j = 0;
  if (array1.length === 0) {
    return array2;
  } else if (array2.length === 0) {
    return array1;
  }
  while (i < array1.length || j < array2.length) {
    if (array1[i] < array2[j]) {
      results.push(array1[i]);
      i += 1;
    } else if (array2[j] < array1[i]) {
      results.push(array2[j]);
      j += 1;
    } else if (array1[i] === array2[j]) {
      results.push(array1[i]);
      i += 1;
    } else if (array1[i] === undefined) {
      results.push(array2[j]);
      j += 1;
    } else if (array2[j] === undefined) {
      results.push(array1[i]);
      i += 1;
    }
  }
  return results;
}

// Refactored, given solution.
// function merge(array1, array2) {
//   var copy1 = array1.slice();
//   var copy2 = array2.slice();
//   var result = [];
//
//   while (copy1.length > 0 && copy2.length > 0) {
//     result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
//   }
//
//   return result.concat(copy1.length === 0 ? copy2 : copy1);
// }


merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
