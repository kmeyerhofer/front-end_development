function average(array) {
  var total = array.reduce(function(sum, item) {
    return sum += item;
  });
  return Math.floor(total / (array.length));
}


average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
