function multiplyLists(array1, array2) {
  return array1.map(function(num, index) {
    return num * array2[index];
  });
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
multiplyList([2, 4, 6], [25, 35, 45]);   // [50, 140, 270]
