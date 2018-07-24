function halvsies(array) {
  var arrayOne = [];
  var arrayTwo = [];
  var limit;
  if (array.length % 2 === 1) {
    limit = ((array.length - 1) / 2) + 1;
    arrayOne.push(array.slice(0, limit));
    arrayTwo.push(array.slice(limit));
  } else {
    limt = array.length / 2;
    arrayOne.push(array.slice(0, limit));
    arrayTwo.push(array.slice(limit));
  }
  
  return [arrayOne, arrayTwo];
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
