function myMap(array, func) {
  var newArr = [];
  array.forEach(function (num) {
    newArr.push(func(num));
  });
  return newArr;
}

var plusOne = function (n) { return n + 1; };

myMap([1, 2, 3, 4], plusOne);
