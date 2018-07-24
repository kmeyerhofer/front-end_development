function countOccurrences(array) {
  var countsObj = {};
  array.forEach(function(item) {
    countsObj[item] = countsObj[item] || 0;
    countsObj[item] += 1;
  });
  Object.keys(countsObj).forEach(function(item) {
    console.log(item + " => " + countsObj[item]);
  });
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2
