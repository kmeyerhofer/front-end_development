function oddElementsOf(arr) {
  var i;
  var oddElements = [];
  for (i = 1; i < arr.length; i += 2) {
    oddElements.push(arr[i]);
  }
  return oddElements;
}
