function bubbleSort(array) {
  var notSorted = true;
  var swapped = false;
  var temp;
  var i;
  while (notSorted) {
    swapped = false;
    for (i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      notSorted = false;
    }
  }
  return array;
}



var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
