function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  var range = [];
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }


// Examples

console.log(range(10, 20));
console.log(range(5));


// Further exploration

function range(start, end) {
  if (!end) {    // If end is undefined or 0, this will return true.
    start = 0;   // This line and the following line need to swap.
    end = start; // Both values are now 0.
  }
