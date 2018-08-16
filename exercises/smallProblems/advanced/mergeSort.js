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

function mergeSort(array) {
  var tempArr = [];
  var individualNested = [];
  var i;
  for (i = 0; i < array.length; i += 2) {
    tempArr.push(array.slice(i, i + 2));
  }
  for (i = 0; i < tempArr.length; i += 1) {
    individualNested.push([tempArr[i].slice(i, i + 1), tempArr[i].slice(i)]);
  }
  return individualNested;
}
