function rotateArray(array) {
  var rotatedArray = [];
  var i;
  if (!Array.isArray(array)) {
    return undefined;
  }
  for (i = 0; i < array.length; i += 1) {
    if (i === array.length - 1) {
      rotatedArray.push(array[0]);
    } else {
      rotatedArray.push(array[i + 1]);
    }
  }
  return rotatedArray;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []
